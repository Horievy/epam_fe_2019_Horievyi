import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CourseModel} from '../../core/models/courses.model';
import {CoursesApiService} from '../../core/services/courses.api-service';
import {switchMap, tap} from 'rxjs/operators';
import {LoaderService} from '../../core/services/loader.service';
import {Router} from '@angular/router';


@Injectable(
)
export class CoursesService {

  private coursesSubject: Subject<CourseModel[]> = new Subject();
  courses: Observable<CourseModel[]> = this.coursesSubject.asObservable();


  constructor(private coursesApiService: CoursesApiService,
              private loaderService: LoaderService,
              private router: Router) { }

  loadCourses() {
    this.loaderService.show();
    return this.getCourses().pipe(
        tap(this.onCoursesReceive),
    );
  }

  loadFilteredCourses(value) {
    this.loaderService.show();
    return this.getFilteredCourses(value).pipe(
        tap(this.onCoursesReceive)
    );
  }

  deleteCourseById(id: number): Observable<{}> {
    this.loaderService.show();
    return this.deleteCourse(id).pipe(
        switchMap(() => this.getCourses()),
        tap(this.onCoursesReceive),
    );
  }

  addCourse(course: CourseModel): Observable<CourseModel> {
    this.loaderService.show();
    return this.coursesApiService.addCourse(course).pipe(
        tap(() => this.loaderService.hide()),
        tap(() => this.router.navigate(['/courses']))
    );
  }

  editCourse(course: CourseModel): Observable<CourseModel> {
    this.loaderService.show();
    return this.coursesApiService.editCourse(course).pipe(
        tap(() => this.loaderService.hide()),
        tap(() => this.router.navigate(['/courses']))
    );
  }

  getCourse(id: number): Observable<CourseModel> {
    this.loaderService.show();
    return this.coursesApiService.getCourse(id).pipe(
        tap(() => this.loaderService.hide())
    );
  }

  navigateById(id: number): void {
    this.router.navigate([`/courses/${id}`]);
  }

  getCourses(): Observable<CourseModel[]> {
    return this.coursesApiService.getCourses();
  }


  getFilteredCourses(value) {
    if (value !== undefined) {
      return this.coursesApiService.getFilteredCourses(value);
    }
  }

  private deleteCourse(id: number): Observable<{}> {
    return this.coursesApiService.deleteCourse(id);
  }

  private onCoursesReceive = (courses: CourseModel[]) => {
    this.coursesSubject.next(courses);
    this.loaderService.hide();
  }

}
