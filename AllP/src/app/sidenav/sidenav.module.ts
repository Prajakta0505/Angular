import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavRoutingModule } from './sidenav-routing.module';
import { StudentComponent } from './student/student.component';

import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {WelcomeComponent } from './welcome/welcome.component';
import {HttpClientModule } from '@angular/common/http';
import {MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ContriesListComponent } from './contries-list/contries-list.component';
import { DialogCountriesComponent } from './dialog-countries/dialog-countries.component';



@NgModule({
  declarations: [
    StudentComponent,
 
    WelcomeComponent,
      ContriesListComponent,
      DialogCountriesComponent,
  
    

  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatIconModule
    
    
  ]
})
export class SidenavModule { }
