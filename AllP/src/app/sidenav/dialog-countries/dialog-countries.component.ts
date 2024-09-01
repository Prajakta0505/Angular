import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { countries } from '../contries-list/contries-list.component';

@Component({
  selector: 'app-dialog-countries',
  templateUrl: './dialog-countries.component.html',
  styleUrls: ['./dialog-countries.component.css']
})
export class DialogCountriesComponent implements OnInit {
  
  studForm!: FormGroup;

  @Output() CountryAdded: EventEmitter<countries> = new EventEmitter<countries>();
  
  constructor(private country: FormBuilder, private dialogref: MatDialogRef<DialogCountriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
  ngOnInit(): void {
    this.studForm = this.country.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      capital: ['', Validators.required],
      population: ['', Validators.required],
      language: ['', Validators.required],
      action: ''
    });
    if(this.data.isView) {
      const Controls = ['id','name','capital','population','language'];
      const FormGroup =this.studForm as FormGroup;
      Controls.forEach(name => {
        FormGroup.get(name)?.disable();
      }); }
    
    if (this.data) {
      this.studForm.patchValue(this.data);
    }
  }
  onFormSubmit() {
    if (this.studForm.valid) {
      const countrydata: countries = this.studForm.value;
      this.CountryAdded.emit(countrydata);
      this.studForm.reset();
      alert("Country Added successfully");
      this.dialogref.close();
    }
  }
  closeform() {
    this.dialogref.close();
  } 
}
