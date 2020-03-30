import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from 'src/model/student';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

@Input() studentdata:Student;
@Output() editChnage = new EventEmitter();
studentAddForm: FormGroup;
submitted = false;
edit:boolean = false;
constructor(private formBuilder: FormBuilder, public studenservice:StudentService) { }
ngOnInit() {
    this.studentAddForm = this.formBuilder.group({
        firstName: [this.studentdata.firstName, Validators.required],
        lastName: [this.studentdata.lastName, Validators.required],
        rollno: [this.studentdata.rollno, Validators.required],
        age: [this.studentdata.age, Validators.required],
        gender: [this.studentdata.gender, Validators.required]
    });
}

// convenience getter for easy access to form fields
get f() { return this.studentAddForm.controls; }

onSubmit() {
    this.submitted = true;


    if (this.studentAddForm.invalid) {
        return;
    }else{
      if(this.edit == true){

      }else{
        console.log(this.studentAddForm.value)
        this.studenservice.updateStudent(this.studentdata.firstName,this.studentdata.lastName,this.studentAddForm.value)
        this.editChnage.emit(true)
        this.studentAddForm.setValue({
          firstName: '',
          lastName: '',
          rollno:null,
          age:null,
          gender:''
       });
      }
    }
}

}
