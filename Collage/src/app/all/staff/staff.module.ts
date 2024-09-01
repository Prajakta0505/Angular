import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import{MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    StaffComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class StaffModule { }
