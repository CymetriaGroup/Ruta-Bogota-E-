import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Course } from '../../interfaces/course.interface';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../interfaces/user.interface';
import { UiService } from '../../../../services/ui.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  header: string = 'RutaBogotáE';
  module: string = '';
  slug: number = 0;
  course!: Course;
  showModal: boolean = false;
  message: string = '';
  showEvaluation: boolean = false;
  user!: User;
  finishTest: boolean = false;
  @ViewChild('fCourse') fCourse!: NgForm;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.module = params.slug;
      const splitId = params.id.split('-');
      this.slug = parseInt(splitId[0]);
      this.uiService.setLoading();
      this.coursesService.getCourse(this.slug).then(course => this.course = course).finally(() => this.uiService.setLoading());
    });
    this.user = JSON.parse(localStorage.getItem('user')!);
    window.scroll(0,0);
  }

  sanitizeVideo(video: string) {
    const url = `https://www.youtube.com/embed/${video}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  async sendAnswers() {
    if (this.fCourse.invalid) {
      this.message = 'Por favor contesta todas las preguntas';
      this.showModal = true;
      return;
    }
    const answers = Object.values(this.fCourse.value) as number[];
    const responseReview = await this.coursesService.addReview(this.course.id, answers);
    if (responseReview.hasOwnProperty('approved') && responseReview.approved) {
      await this.userService.getPoints(this.user.id);
      this.message = `Has pasado la evaluación exitosamente y acumulaste ${responseReview.points} puntos!`;
      this.showModal = true;
      this.showEvaluation = false;
      this.finishTest = false;
      await this.coursesService.getCourse(this.slug).then(course => this.course = course);
    } else {
      this.message = 'No has pasado la evaluación.';
      this.showModal = true;
      this.showEvaluation = true;
      await this.coursesService.getCourse(this.slug).then(course => this.course = course);
      this.course.questions = this.course.questions.map(question => {
        const answer = responseReview.find((res: any) => parseInt(res.id) === question.data.id);
        return {
          ...question,
          correct: answer.correct,
          answer_name: answer.answer_name
        }
      });
      this.finishTest = true;
    }
    this.fCourse.resetForm();
  }

  getTimes(): string {
    return `Presentar evaluación ( intento ${this.course.times + 1} de 5 posibles)`;
  }

  closeModal() {
    this.showModal = false;
  }

  makeTest() {
    this.showEvaluation = true;
  }

  async handleCourse(course: Course) {
    if (this.isSubscribed(course.id)) {

    } else {
      const user = await this.coursesService.addCourse(course.id, this.user.id);
      this.updateUser(user);
    }
  }

  isSubscribed(id: number): boolean {
    return this.user.courses?.find(course => course === id) ? true : false;
  }

  updateUser(user: User) {
    localStorage.setItem('user', JSON.stringify({
      ...user,
      points: this.user.points,
      total_points: this.user.total_points
    }));
    this.user = user;
  }

  openDocuments() {
    this.header = this.course.name;
    let documents = '<ul>';
    if (this.course.doc_1) {
      documents += `<li class="mb-2"><a target="_blank" href="${this.course.doc_1}">Documento 1</a></li>`;
    }
    if (this.course.doc_2) {
      documents += `<li class="mb-2"><a target="_blank" href="${this.course.doc_2}">Documento 2</a></li>`;
    }
    documents += '</ul>';
    this.message = documents;
    this.showModal = true;
  }

}
