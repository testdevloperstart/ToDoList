import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);

    // we are grabing the input given by user ans pushing it to the table
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })
    // this form.reset will reset the input element to empty
    form.reset();
  }

  onDelete(index: number) {
    console.log(index);
    //  splice will remove an element from an array using its index
    this.taskArray.splice(index, 1);
  }
  // to get the check box in sink whit array, we give "index: number" as an argumant 
  onCheck(index: number) {
    console.log(this.taskArray);
    // we are changeing the check box value from true to false and form false to true
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
