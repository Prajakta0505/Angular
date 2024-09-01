import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  signdata: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
     this.signdata = JSON.parse(localStorage.getItem('signup_data') || '[]');
    
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  LoginFormSubmit() {
    if (this.loginForm.valid) {
      const loginUsername = this.loginForm.get('username')?.value;
      const loginpassword= this.loginForm.get('password')?.value;
  
    const matchedUser = this.signdata.find(user => user.username === loginUsername && user.password === loginpassword);
  
      if (matchedUser) {
        this.router.navigateByUrl('college/parent/profile');
      } else {
        alert('Invalid username or password');
      }
    }
  }
  }

