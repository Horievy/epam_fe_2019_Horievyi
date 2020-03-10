import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHightlightNewCourse]'
})
export class HightlightNewCourseDirective {
  @HostBinding('style') itemStyle: string;
  @HostListener('click') handleClick() {
    console.log('click');
  }
  @Input() set creationDate(creationDate: number) {
    const daysToCheck = 1000 * 3600 * 24 * 14;
    const dateNow = new Date().getTime();
    const timeDifference = dateNow - creationDate;

    if (timeDifference > daysToCheck) {
      this.itemStyle = 'border: 1px solid red';
    }
  }

  constructor() {
  }

}
