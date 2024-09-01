import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateStudentComponent } from 'src/app/create-student/create-student.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'bloodGroup', 'gender', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor
  (private _dialog: MatDialog,
     private _studService: StudentService,
     ) { }

  ngOnInit(): void {
    this.getStudentList();
  }
  openAddEditForm() {
    const MatDialogRef = this._dialog.open(CreateStudentComponent);
    MatDialogRef.afterClosed().subscribe({
      next: (val) => {
        this.getStudentList();
      }
    });
  }
  getStudentList() {
    this._studService.getStudentList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  deleteStudentList(id: number) {
    this._studService.deleteStudentList(id).subscribe({
      next: (res) => {
        alert('Student deleted..!');
        this.getStudentList();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  openEditForm(data: any) {
    const MatDialogRef =this._dialog.open(CreateStudentComponent, {
      data,
    });
    MatDialogRef.afterClosed().subscribe({
      next: (val) => {
        this.getStudentList();
      }
    });
  }
}