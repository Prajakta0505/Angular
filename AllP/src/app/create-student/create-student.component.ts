import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { DialogRole, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  studForm: FormGroup;
  constructor(private _fb: FormBuilder, private _studService: StudentService, private _dialogRef: MatDialogRef<CreateStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
    this.studForm = this._fb.group({
      id:'',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      bloodGroup: '',
      gender: ''
    })
  }
  ngOnInit(): void{
    this.studForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.studForm.valid) {
           if(this.data)
           {
            this._studService.updateStudent(this.data.id,this.studForm.value)
            .subscribe({
              next: (val: any) => {
                alert('student updated...!!');
                this._dialogRef.close(true);
              },
              error: (err: any) => {
                console.error(err);
              },
            })
           }  else{this._studService.addStudent(this.studForm.value).subscribe({
            next: (val: any) => {
              alert('student Added Successfully');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          })
        }       
    }
  }
}
