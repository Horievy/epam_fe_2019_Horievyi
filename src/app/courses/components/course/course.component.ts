import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseModel} from '../../../core/models/courses.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {

  @Input() course: CourseModel;
  @Output() deleted: EventEmitter<number> = new EventEmitter();
  @Output() edit: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(): void {
    this.deleted.emit(this.course.id);
  }

  handleEdit(): void {
    this.edit.emit(this.course.id);
  }
}
