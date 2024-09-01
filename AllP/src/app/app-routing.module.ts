import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './sidenav/welcome/welcome.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BankComponent } from './bank/bank.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }, 
    {path:'employeeList',component:EmployeeListComponent},
    {path:'bank',component:BankComponent},
    {path:'bankdetails',component:BankDetailsComponent},
  { path:'sidenav', loadChildren: () => import('./sidenav/sidenav.module').then(m => m.SidenavModule) },
    { path: 'college', loadChildren: () => import('./college/college.module').then(m => m.CollegeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
