import { Injectable } from '@angular/core';
import { User } from 'src/app/diagnostic/interfaces/user.interface';
import { SDK } from '../../../../sdk/sdk';
import { LevelResponse } from '../interfaces/level.interface';
import { Course } from '../interfaces/course.interface';
import { Review, ReviewResponseList } from '../interfaces/review.interface';
import { ResponseCategory } from '../interfaces/category.interface';
import { ResponseCourse } from '../interfaces/response-course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends SDK {

  getCategories() {
    return this.get<ResponseCategory>(`${this.endpoints.categories}/`, {
      time: Date.now()
    });
  }

  getLevels(data: any) {
    return this.get<LevelResponse>(`${this.endpoints.level}/`, {
      ...data,
      time: Date.now()
    });
  }

  getCourses(data: any) {
    return this.get<ResponseCourse>(`${this.endpoints.courses}/`, {
      ...data,
      time: Date.now()
    });
  }

  getCourse(id: number) {
    return this.get<Course>(`${this.endpoints.courses}/${id}/?time=${Date.now()}`, null);
  }

  addCourse(id: number, userId: string) {
    return this.patch<User>(`/${this.endpoints.users}/${userId}/`, {
      courses: [id],
      time: Date.now()
    });
  }

  removeCourse(id: number, userId: string) {
    return this.patch<User>(`/${this.endpoints.users}/${userId}/`, {
      remove_courses: [id],
      time: Date.now()
    });
  }

  addReview(course: number, answer: number[]) {
    return this.post<any>(`${this.endpoints.reviews}/`, {
      course,
      answer,
      time: Date.now()
    });
  }

  getReviews() {
    return this.get<ReviewResponseList>(`${this.endpoints.reviews}/`, {
      time: Date.now()
    });
  }

}
