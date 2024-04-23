import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  @Input() 
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];

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
