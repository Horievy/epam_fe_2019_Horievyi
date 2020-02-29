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

  deleteCourse(id: number) {
    return this.httpClient.delete<CourseModel[]>(`${BASE_URL}/courses/${id}`);
  }
}
