import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup; 
  signupdata:any[]=[];
  signdata:any[]=[];

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.signdata = JSON.parse(localStorage.getItem('signup_data') || '[]');
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]), 
      password: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required)
    });
  }
  signupFormSubmit() {
    if (this.signupForm.valid) {
      this.signupdata.push(this.signupForm.value);
      localStorage.setItem('signup_data', JSON.stringify(this.signupdata));
      this.router.navigateByUrl('college/parent/login');
      this.signupForm.reset();
    }
  }
}
