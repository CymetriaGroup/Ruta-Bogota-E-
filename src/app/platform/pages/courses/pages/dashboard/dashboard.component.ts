import { Component, OnInit } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';
import { Review, ReviewResponseList } from '../../interfaces/review.interface';
import { CoursesService } from '../../services/courses.service';
import { DatePipe } from '@angular/common';
import { ResponseCategory, Category } from '../../interfaces/category.interface';
import { ResponseCourse, SimpleCourse } from '../../interfaces/response-course.interface';
import { UiService } from '../../../../services/ui.service';
import { UserService } from '../../../../services/user.service';
import { Course } from '../../interfaces/course.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;
  reviews: Review[] = [];
  enrolledCourses: SimpleCourse[] = [];
  completedCourses: SimpleCourse[] = [];
  categories: Category[] = [];
  loading: boolean = false;
  suggestedCourses: number = 0;
  isRegisteredUser: boolean = false;

  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor(
    private coursesService: CoursesService,
    private datePipe: DatePipe,
    private uiService: UiService,
    private userService: UserService,
    private router: Router
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.suggestedCourses = this.user.suggested_courses?.length || 0;
    this.isRegisteredUser = this.userService.isRegisteredUser(this.user);
  }

  ngOnInit(): void {
    if (this.isRegisteredUser) {
      this.getDashboardInfo();
    }
  }

  async getDashboardInfo() {
    this.loading = true;
    this.uiService.setLoading();
    let enrolledCoursesFull: SimpleCourse[] = [];
    const responseReviewsList: ReviewResponseList = await this.coursesService.getReviews();
    if (this.user.suggested_courses?.length) {
      const responseCourse: ResponseCourse = await this.coursesService.getCourses({
        id_in: this.user.suggested_courses?.toString()
      })
      this.enrolledCourses = responseCourse.results;
      enrolledCoursesFull = this.enrolledCourses;
      enrolledCoursesFull.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      if (this.enrolledCourses.length) {
        this.enrolledCourses = this.enrolledCourses.filter(course => this.user.courses?.includes(course.id));
      }
    }
    this.reviews = responseReviewsList.results;
    this.completedCourses = this.reviews.filter(review => review.approved).map(review => {
      return {
        id: review.course_info.id,
        name: review.course_info.name,
        description: this.datePipe.transform(review.created_at, 'medium') || '',
        slug: review.course_info.slug,
        category: review.course_info.category_slug,
        category_slug: review.course_info.category_slug,
        category_order: 0,
        points: review.course_info.points,
        image: review.course_info.image
      }
    });
    if (this.areCoursesCompleted()) {
      const categoriesResponse: ResponseCategory = await this.coursesService.getCategories();
      this.categories = categoriesResponse.results;
    } else {
      let categories = enrolledCoursesFull.map(course => {
        return {
          name: course.category,
          slug: course.category_slug,
          order: course.category_order,
          courses: enrolledCoursesFull.filter(c => c.category_slug === course.category_slug)
        }
      });
      categories = categories.filter((category, index, self) =>
        index === self.findIndex((t) => (
          t.name === category.name
        ))
      )
      categories.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
      this.categories = categories;
    }
    this.uiService.setLoading();
    this.loading = false;
  }

  parseConfig(course: SimpleCourse) {
    return {
      title: course.name,
      subtitle: `${course.points} puntos`,
      description: course.description,
      url: '',
      image: course.image
    }
  }

  parseConfigCourse(course: SimpleCourse) {
    return {
      title: course.name,
      subtitle: '',
      description: '',
      url: `/platform/courses/${course.category_slug}/${course.id}-${course.slug}`,
      image: course.image
    }
  }

  areCoursesCompleted() {
    /*const reviews = Object.keys(this.reviews.reduce(function (r, a) {
      r[a.course] = r[a.course] || [];
      r[a.course].push(a);
      return r;
  }, Object.create(null)));
    const introductions = [57, 60, 61, 62, 63, 64, 65];
    const suggestedCourses = this.user.suggested_courses?.filter(course => !introductions.includes(course));
    const suggestedLength = suggestedCourses?.length || 0;
    return reviews.length >= suggestedLength;*/
    const introductions = [57, 60, 61, 62, 63, 64, 65];
    const suggestedCourses = this.user.suggested_courses?.filter(course => !introductions.includes(course));
    const suggestedLength = suggestedCourses?.length || 10;
    //return this.enrolledCourses.length >= suggestedLength;
    return true;
  }

  async handleCourse(course: Course) {
    if (this.isSubscribed(course.id)) {
      this.router.navigateByUrl(`/platform/courses/${ course.category_slug }/${ course.id }-${ course.slug }`);
    } else {
      await this.uiService.setLoading();
      const user = await this.coursesService.addCourse(course.id, this.user.id);
      this.updateUser(user);
      await this.uiService.setLoading();
      this.router.navigateByUrl(`/platform/courses/${ course.category_slug }/${ course.id }-${ course.slug }`);
    }
  }

  isSubscribed(id: number): boolean {
    this.user = JSON.parse(localStorage.getItem('user')!);
    return this.user.courses?.find(course => course === id) ? true : false;
  }

  updateUser(user: User) {
    localStorage.setItem('user', JSON.stringify({
      ...user,
      points: this.user.points
    }));
    this.user = user;
  }

  isCompleted(course: Course) {
    const completedIds = this.completedCourses.map(course => course.id);
    return completedIds.includes(course.id);
  }


}
