import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {switchMap, tap} from 'rxjs/operators';
import {CourseModel} from '../../../core/models/courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers : [CoursesService]
})
export class CoursesComponent implements OnInit {
  date: Date = new Date();
  courses: CourseModel[];
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCourses().pipe(
        tap( data => this.courses = data)
    ).subscribe();
  }

  handleDelete(id: number) {
    this.coursesService.deleteCourse(id).pipe(
        switchMap(() => this.coursesService.getCourses()),
        tap(data => this.courses = data)
    ).subscribe();
  }

}
