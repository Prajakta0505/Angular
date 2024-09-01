import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  signupForm!: FormGroup; 
   A:any;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required), 
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  signupFormSubmit() {
    // console.log(this.signupForm.value);
   this.A=this.signupForm.value 
  }
}
