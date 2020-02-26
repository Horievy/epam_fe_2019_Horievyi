import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './containers/courses/courses.component';
import {CoursesRoutingModule} from './courses.routing-module';
import { NewCourseComponent } from './containers/new-course/new-course.component';
import { CourseComponent } from './components/course/course.component';
import { CourseFormComponent } from './components/course-form/course-form.component';



@NgModule({
  declarations: [CoursesComponent, NewCourseComponent, CourseComponent, CourseFormComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
