import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from 'rxjs/operators';
import {CourseModel} from '../../../core/models/courses.model';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers : [CoursesService]
})

export class CoursesComponent implements OnInit {
  date: Date = new Date();
  courses: CourseModel[];
  searchControl = new FormControl();
  public coursesExists: boolean;

  constructor(public coursesService: CoursesService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.coursesService.loadCourses().subscribe();
    this.coursesService.courses.pipe(
        tap(courses => this.courses = courses)
    ).subscribe();
    this.searchControl.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value) => this.coursesService.loadFilteredCourses(value)),
        tap(() => {
          this.coursesExists = !this.courses.length;
        })
    ).subscribe();
  }

  handleDelete(id: number) {
    this.coursesService.deleteCourseById(id).subscribe();
  }

  handleEdit(id: number): void {
    this.coursesService.navigateById(id);
  }

}
