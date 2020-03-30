import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {
@Output() valuechange = new EventEmitter();
studentAddForm: FormGroup;
submitted = false;
edit:boolean = false;
constructor(private formBuilder: FormBuilder, public studenservice:StudentService) { }
ngOnInit() {
    this.studentAddForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        rollno: ['', Validators.required],
        age: ['', Validators.required],
        gender: ['', Validators.required]
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
        this.studenservice.addStudent(this.studentAddForm.value)
        this.valuechange.emit(true)
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
