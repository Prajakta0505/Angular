import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import{MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class StudentModule { }
