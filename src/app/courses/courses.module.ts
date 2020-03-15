import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './containers/courses/courses.component';
import {CoursesRoutingModule} from './courses.routing-module';
import { NewCourseComponent } from './containers/new-course/new-course.component';
import { CourseComponent } from './components/course/course.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { MinutsToHoursPipe } from './pipes/minuts-to-hours.pipe';
import { HightlightNewCourseDirective } from './directives/hightlight-new-course.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CoursesComponent,
    NewCourseComponent,
    CourseComponent,
    CourseFormComponent,
    MinutsToHoursPipe,
    HightlightNewCourseDirective
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class CoursesModule { }
