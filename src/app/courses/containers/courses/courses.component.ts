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
    this.coursesService.loadCourses().subscribe();
    this.coursesService.courses.pipe(
        tap(courses => this.courses = courses)
    ).subscribe();
  }

  handleDelete(id: number) {
    this.coursesService.deleteCourseById(id).subscribe();
  }

}
