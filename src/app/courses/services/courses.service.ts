import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CourseModel} from '../../core/models/courses.model';
import {CoursesApiService} from '../../core/services/courses.api-service';

@Injectable(
)
export class CoursesService {

  constructor(private coursesApiService: CoursesApiService) { }

  getCourses(): Observable<CourseModel[]> {
    return this.coursesApiService.getCourses();
  }

  deleteCourse(id: number): Observable<{}> {
    return this.coursesApiService.deleteCourse(id);
  }
}
