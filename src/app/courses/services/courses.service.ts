import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CourseModel} from '../../core/models/courses.model';
import {CoursesApiService} from '../../core/services/courses.api-service';
import {switchMap, tap} from 'rxjs/operators';
import {LoaderService} from '../../core/services/loader.service';

@Injectable(
)
export class CoursesService {

  private coursesSubject: Subject<CourseModel[]> = new Subject();
  courses: Observable<CourseModel[]> = this.coursesSubject.asObservable();


  constructor(private coursesApiService: CoursesApiService,
              private loaderService: LoaderService) { }

  loadCourses() {
    this.loaderService.show();
    return this.getCourses().pipe(
        tap(this.onCoursesReceive),

    );
  }

  deleteCourseById(id: number): Observable<{}> {
    this.loaderService.show();
    return this.deleteCourse(id).pipe(
        switchMap(() => this.getCourses()),
        tap(this.onCoursesReceive),
    );
  }

  private getCourses(): Observable<CourseModel[]> {
    return this.coursesApiService.getCourses();
  }

  private deleteCourse(id: number): Observable<{}> {
    return this.coursesApiService.deleteCourse(id);
  }

  private onCoursesReceive = (courses: CourseModel[]) => {
    this.coursesSubject.next(courses);
    this.loaderService.hide();
  }
}
