import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegeRoutingModule } from './college-routing.module';
import { CollegeComponent } from './college.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProfileeComponent } from './profilee/profilee.component';
import { SignupComponent } from './signup/signup.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    CollegeComponent,
    PagenotFoundComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ProfileeComponent,
      SignupComponent
  
    
  ],
  imports: [
    CommonModule,
    CollegeRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class CollegeModule { }
