import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {CoursesComponent} from './containers/courses/courses.component';
import {NewCourseComponent} from './containers/new-course/new-course.component';

const routes: Route[] = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'add',
    component: NewCourseComponent
  },
  {
    path: ':id',
    component: NewCourseComponent
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
      RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
