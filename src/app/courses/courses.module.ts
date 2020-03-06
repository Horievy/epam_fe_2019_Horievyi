import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './containers/courses/courses.component';
import {CoursesRoutingModule} from './courses.routing-module';
import { NewCourseComponent } from './containers/new-course/new-course.component';
import { CourseComponent } from './components/course/course.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { MinutsToHoursPipe } from './pipes/minuts-to-hours.pipe';
import { TimeOfCreationPipe } from './pipes/time-of-creation.pipe';
import { HightlightNewCourseDirective } from './directives/hightlight-new-course.directive';



@NgModule({
  declarations: [CoursesComponent, NewCourseComponent, CourseComponent, CourseFormComponent, MinutsToHoursPipe, TimeOfCreationPipe, HightlightNewCourseDirective],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  providers: []
})
export class CoursesModule { }
