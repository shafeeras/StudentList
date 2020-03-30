import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
  }
  getStudentList(): Promise<any> {
    return new Promise((resolve, reject) => {
      let studentlist = JSON.parse(localStorage.getItem('students'));
      resolve(studentlist);
    });

  }

  addStudent(newStudent) {
    return new Promise((resolve, reject) => {
      let students = JSON.parse(localStorage.getItem('students'));
      if(students == null){
        students = []
      }
      students.push(newStudent);
      localStorage.setItem('students', JSON.stringify(students));
      resolve(students);
    });
  }

  deleteStudent(firstname, lastname) {
    let students = JSON.parse(localStorage.getItem('students'));

    for (let i = 0; i < students.length; i++) {
      if (students[i].firstname == firstname && students[i].lastname == lastname) {
        students.splice(i, 1);
      }
    }
    // Set New Todos
    localStorage.setItem('students', JSON.stringify(students));
  }

  updateStudent(firstname, lastname, updateData) {
    let students = JSON.parse(localStorage.getItem('students'));

    for (let i = 0; i < students.length; i++) {
      if (students[i].firstName == firstname && students[i].lastName == lastname) {
        students[i] = updateData;
      }
    }
    // Set New Todos
    localStorage.setItem('students', JSON.stringify(students));
  }

}
