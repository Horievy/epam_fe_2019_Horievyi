import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CourseModel} from '../models/courses.model';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(`${BASE_URL}/courses`);
  }

  getFilteredCourses(value: string): Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(`${BASE_URL}/courses?title_like=${value}`);
  }

  deleteCourse(id: number) {
    return this.httpClient.delete<CourseModel[]>(`${BASE_URL}/courses/${id}`);
  }

  addCourse(course: CourseModel): Observable<CourseModel> {
    return this.httpClient.post<CourseModel>(`${BASE_URL}/courses/`, course);
  }

  editCourse(course: CourseModel): Observable<CourseModel> {
    return this.httpClient.put<CourseModel>(`${BASE_URL}/courses/${course.id}`, course);
  }

  getCourse(id: number): Observable<CourseModel> {
    return this.httpClient.get<CourseModel>(`${BASE_URL}/courses/${id}`);
  }

}
