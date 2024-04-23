import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { taskArray } from '../storarray';

@Component({
  selector: 'app-enterinput',
  templateUrl: './enterinput.component.html',
  styleUrl: './enterinput.component.css'
})
export class EnterinputComponent {

  @Input() 
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];
  newname:any;
  
  onSubmit(form: NgForm) {
    console.log(form);

    this.newname=form.controls['task'].value,
    // we are grabing the input given by user ans pushing it to the table
    this.taskArray.push({
      taskName: this.newname,
      isCompleted: false
    })
    // this form.reset will reset the input element to empty
    form.reset();
  }
}
