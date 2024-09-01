import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidenavModule } from './sidenav/sidenav.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateStudentComponent } from './create-student/create-student.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PraciceComponent } from './pracice/pracice.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { AngularComponent } from './angular/angular.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    PraciceComponent,
    BankDetailsComponent,
    BankComponent,
    AngularComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
