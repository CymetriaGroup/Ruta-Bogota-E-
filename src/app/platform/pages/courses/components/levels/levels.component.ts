import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/diagnostic/interfaces/user.interface';
import { Level } from '../../interfaces/level.interface';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {

  @Input() levels: Level[] = [];
  @Output() onEnterCourse: EventEmitter<string> = new EventEmitter();
  user: User;

  constructor(
    private coursesService: CoursesService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
  }

  async handleCourse(course: Course) {
    if (this.isSubscribed(course.id)) {
      this.onEnterCourse.emit(`${course.id}-${course.slug}`);
    } else {
      const user = await this.coursesService.addCourse(course.id, this.user.id);
      this.updateUser(user);
    }
  }

  isSubscribed(id: number): boolean {
    return this.user.courses?.find(course => course === id) ? true : false;
  }

  updateUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

}
