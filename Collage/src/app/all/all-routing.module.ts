import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

const routes: Routes = [
{
  path:'',
  children:[
    { path: '', loadChildren:() => import('./student/student.module').then((m) => m.StudentModule) },
    {
     path: '',
     loadChildren: () => import('./staff/staff.module').then((m) => m.StaffModule),
   },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllRoutingModule { }
