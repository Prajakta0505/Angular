import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StudentService } from '../services/student.service';
import { EmployeeModel } from 'employeemodel';

export interface employees {
  id:number;
  education:string;
  FirstName:string;
  Email:string;
  Position:string;
  States:string;
}
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
 
    displayedColumns: string[] = [
      'srn',
      'id',
      'education',
      'action'
    ];
    dataSource: MatTableDataSource<employees> = new MatTableDataSource<employees>();
                                                     
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog,private studentservice:StudentService,private cdr :ChangeDetectorRef) {}

  openFormEmployee() {
   const dialogref= this.dialog.open(EmployeeFormComponent,
    {
      data:{idEdit:false}
    });
    dialogref.componentInstance.employeeData.subscribe((EmpFormData: EmployeeModel)=>{
      this.addEmployeeToDatasource(EmpFormData);
    });
  }
  ngOnInit(): void {
    this.dataSource.paginator=this.paginator;
    this.studentservice.getCountryAddedObservable().subscribe((newemployee:any[]) =>{
      console.log('new employee added:',newemployee);
      this.getemployee();
    });
  }
  getemployee():any{
    this.studentservice.getEmployeeList().subscribe((Employee:any[]) => {
      this.dataSource.data=Employee;
    })
  }
  addEmployeeToDatasource(employees: EmployeeModel):void{
    this.dataSource.data = [...this.dataSource.data,employees]; 
  }

  deleteRecord(id: number): void {
    const index = this.dataSource.data.findIndex(
      (country) => country.id === id
    );
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<employees>(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      alert('Employee deleted successfully!');
    }
  }
  editFormEmployee(empdata:employees): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      data:empdata
    });
    dialogRef.componentInstance.employeeData.subscribe((updatedEmp:employees) => {
     const index = this.dataSource.data.findIndex(item => item.id === updatedEmp.id);
     if (index !== -1) {
       this.dataSource.data[index] = updatedEmp;
       this.dataSource._updateChangeSubscription(); 
      alert('employee updated successfully!'); 
     }
    });
  }
}