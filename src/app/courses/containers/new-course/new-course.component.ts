import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../../../core/models/courses.model';
import {CoursesService} from '../../services/courses.service';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss'],
  providers: [CoursesService]
})
export class NewCourseComponent implements OnInit {

  id: number;
  course: CourseModel;

  constructor(private coursesService: CoursesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.coursesService.getCourse(this.id).pipe(
       tap(course => this.course = course)
      ).subscribe();
    }
  }

    onAdd(course: CourseModel): void {
      this.coursesService.addCourse(course).subscribe();
    }

    onEdit(course: CourseModel): void {
      this.coursesService.editCourse(course).subscribe();
    }
}
