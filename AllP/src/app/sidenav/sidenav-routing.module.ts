import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ContriesListComponent } from './contries-list/contries-list.component';

const routes: Routes = [

  {path:"student",component:StudentComponent},
  {path:"countries",component:ContriesListComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }