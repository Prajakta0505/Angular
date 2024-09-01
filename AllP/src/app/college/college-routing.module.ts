import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileeComponent } from './profilee/profilee.component';
import { AuthguardGuard } from '../shared/authguard.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'parent',
    component: CollegeComponent,
    children: [
      { path: 'login', component: LoginComponent},
      {path:'signup',component:SignupComponent},
     { path: 'forgot-pass', component: ForgotPasswordComponent },
     {path:'profile',component:ProfileeComponent,canActivate:[AuthguardGuard]},
 
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      {path:'**',component:PagenotFoundComponent},
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeRoutingModule { }