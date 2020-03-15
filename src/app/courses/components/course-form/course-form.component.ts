import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {rangeValidator} from '../../../core/validators/range.validators';
import {dateValidator} from '../../../core/validators/date.validator';
import {CourseModel} from '../../../core/models/courses.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  id: number;
  existed: boolean;
  date: any;
  @Input() set course(course: CourseModel) {
    if (course && course.id) {
      this.id = course.id;
      this.existed = true;
      this.form.patchValue({...course, date: 123});
    }
  }
  @Output() add: EventEmitter<CourseModel> = new EventEmitter();
  @Output() edit: EventEmitter<CourseModel> = new EventEmitter();

  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(900)]],
    duration: ['', [rangeValidator]],
    date: ['', [dateValidator]],
    authors: ['', [Validators.required]],
    hasAuthors: true,
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onAdd(): void {
      if (this.form.valid) {
        console.log(this.form.value);
        this.add.emit(this.form.value);
      }
  }

  onEdit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.edit.emit({...this.form.value, id: this.id});
    }
  }

}
