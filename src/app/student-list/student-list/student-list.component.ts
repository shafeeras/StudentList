import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../../../model/student'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, AfterViewInit {
 studentList:Student[];
 edit:boolean =false;
 studentdata:any;
  constructor(public studenservice:StudentService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
   this.getStudentList();
  }
  load(e){
    this.getStudentList();
  }
  editload(e){
    this.edit = false;
    this.getStudentList();
  }
  getStudentList(){
    this.studenservice.getStudentList().then((data) => {
    
      this.studentList = data;
    })
  }
  update(item){
    this.edit = true;
    this.studentdata = item;
  }

  

}
