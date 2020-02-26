import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {AboutComponent} from "./about/about.component";

const routes: Route[] = [
  {
    path: '',
    component: AboutComponent
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
export class AboutRoutingModule { }
