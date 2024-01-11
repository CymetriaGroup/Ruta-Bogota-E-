import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Review, ReviewResponseList } from '../courses/interfaces/review.interface';
import { CoursesService } from '../courses/services/courses.service';
import { ResponseCourse, SimpleCourse } from '../courses/interfaces/response-course.interface';
import { User } from '../../../diagnostic/interfaces/user.interface';
import { UiService } from '../../services/ui.service';
import { CollaboratorService } from '../collaborators/services/collaborator.service';
import { CollaborativeSimple } from '../collaborators/interfaces/collaborators.interface';
import { Marketplace } from '../marketplace/interfaces/marketplace.interface';
import { MarketplaceService } from '../marketplace/services/marketplace.service';
import { Top } from './interfaces/top.interfaces';
import { DashboardService } from './services/dashboard.service';
import { UserService } from '../../services/user.service';
import { Testimony } from './interfaces/testimony.interface';
import { TestimonyService } from '../../services/testimony.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  events = [
    {
      label: "Diagnóstico",
      disabled: false,
      icon: 'pi pi-check-circle',
      tooltip: 'Es la primera estación de nuestra Ruta. Es el primer requisito para iniciar tu ruta personalizada.'
    },
    {
      label: "Academia",
      disabled: false,
      icon: 'pi pi-check-circle',
      tooltip: 'Es la tercera estación de la Ruta. Debes haber pasado por un colaborarorio para iniciar tu formación personalizada.'
    },
    {
      label: "Colaboratorios",
      disabled: false,
      icon: 'pi pi-check-circle',
      tooltip: 'Es la segunda estación de nuestra Ruta. Debes tener tu diagnóstico realizado para poder agendar tu colaborarorio.'
    },
    {
      label: "Conexiones",
      disabled: false,
      icon: 'pi pi-check-circle',
      tooltip: 'Es la cuarta estación de la Ruta. Debes haber pasado por la Academia E y cumplir otros requisitos para llegar a la estación de conexiones de mercado.'
    },
  ];

  banners = [
    './assets/img/dashboard/banner_networking2.jpg',
    './assets/img/dashboard/banner000.jpeg',
    './assets/img/dashboard/banner002.jpeg',
    './assets/img/dashboard/banner02.jpg',
    './assets/img/dashboard/banner03.jpg'
  ];

  reviews: Review[] = [];
  user: User;
  courses: SimpleCourse[] = [];
  myCollaboratives: CollaborativeSimple[] = [];
  completedCollaboratives: CollaborativeSimple[] = [];
  marketplace: Marketplace[] = [];
  top: Top[] = [];
  isRegisteredUser: boolean = false;
  testimonies: Testimony[] = [];


  constructor(
    private coursesService: CoursesService,
    private datePipe: DatePipe,
    private uiService: UiService,
    private collaborativeService: CollaboratorService,
    private marketplaceService: MarketplaceService,
    private dashboardService: DashboardService,
    private userService: UserService,
    private testimonyService: TestimonyService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.isRegisteredUser = this.userService.isRegisteredUser(this.user);
  }

  ngOnInit(): void {
    if (this.isRegisteredUser) {
      this.getReviewsCourses();
    }
  }

  async getReviewsCourses() {
    this.uiService.setLoading();
    const responseReviewsList: ReviewResponseList = await this.coursesService.getReviews();
    this.reviews = responseReviewsList.results;
    if(this.user.courses?.length) {
      const responseCourse: ResponseCourse = await this.coursesService.getCourses({
        id_in: this.user.courses?.toString()
      });
      this.courses = responseCourse.results;
    }
    this.myCollaboratives = await this.collaborativeService.getMyCollaboratives();
    this.completedCollaboratives = this.myCollaboratives.filter(collaborative => collaborative.assisted_at);
    this.marketplace = await this.marketplaceService.getMarketplace();
    const testimonyResponse = await this.testimonyService.getTestimony();
    this.testimonies = testimonyResponse.results;
    this.top = await this.dashboardService.getTop();
    this.top.sort((a,b) => (a.real_points > b.real_points) ? 1 : ((b.real_points > a.real_points) ? -1 : 0))
    this.top.reverse();
    this.uiService.setLoading();
  }

  parseConfig(course: Review) {
    return {
      title: course.course_info.name,
      subtitle: `${course.course_info.points} puntos`,
      description: this.datePipe.transform(course.created_at, 'medium') || '',
      url: `/platform/courses/${course.course_info.category_slug}/${course.course_info.id}-${course.course_info.slug}`,
      image: course.course_info.image
    }
  }

  parseConfigCourse(course: SimpleCourse) {
    let description = 'Iniciado';
    let url = '';
    if (this.reviews.length) {
      const completedIds = this.reviews.map(review => review.course_info.id);
      if (completedIds.includes(course.id)) {
        description = 'Completado'
      } else {
        url = `/platform/courses/${course.category_slug}/${course.id}-${course.slug}`;
      }
    }
    return {
      title: course.name,
      subtitle: `${course.points} puntos`,
      description,
      url,
      image: course.image
    }
  }

}
