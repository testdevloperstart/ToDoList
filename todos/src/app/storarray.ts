export class taskArray {
    public taskName:string;
    public isCompleted:boolean;

    // taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];
    constructor(taskName:string, isCompleted:boolean){
        this.taskName=taskName;
        this.isCompleted=isCompleted
    }
}
