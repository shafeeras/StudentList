import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListRoutingModule } from './student-list-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentService } from './student.service';



@NgModule({
  declarations: [StudentListComponent, StudentCreateComponent, StudentEditComponent],
  imports: [
    CommonModule,
    StudentListRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    StudentListComponent, StudentCreateComponent, StudentEditComponent
  ],
  providers:[
    StudentService
  ]
})
export class StudentListModule { }
