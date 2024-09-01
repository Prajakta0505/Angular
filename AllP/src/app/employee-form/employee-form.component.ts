import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Output() employeeData:EventEmitter<any[]>=new EventEmitter<any[]>();

  empForm: FormGroup;
  constructor(private builder: FormBuilder, private dialogref: MatDialogRef<EmployeeListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.empForm = this.builder.group({
      id: ['', Validators.required],
      education: ['', Validators.required],
      employeeDetails: this.builder.array([]) 
    });
    this.addEmployeeDetail();
  }
  ngOnInit(): void { 
    if (this.data) {
      this.empForm.patchValue(this.data);
    }
  }
  get employeeDetailsControls() {
    return (this.empForm.get('employeeDetails') as FormArray).controls;
  }
  addEmployeeDetail() {
    const employeeDetail = this.builder.group({
      FirstName: ['', Validators.required],
      Email: ['', Validators.required], 
      Position: ['', Validators.required],
      States: ['', Validators.required]
    });
    (this.empForm.get('employeeDetails') as FormArray).push(employeeDetail);
  }
  removeEmployeeDetail(index: number) {
    const employeeDetailsArray = this.empForm.get('employeeDetails') as FormArray;
    employeeDetailsArray.removeAt(index);
  }
  FormSubmit()
  {
    console.log(this.empForm.value);
    if(this.empForm.valid)
    {
     const EmpFormData=this.empForm.value;
      this.employeeData.emit(EmpFormData);
      this.dialogref.close();
    }
  }
}