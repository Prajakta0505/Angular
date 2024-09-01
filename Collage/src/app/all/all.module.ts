import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllRoutingModule } from './all-routing.module';
import { StudentModule } from './student/student.module';
import { StaffModule } from './staff/staff.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllRoutingModule,
    StudentModule,
    StaffModule
  ]
})
export class AllModule { }
