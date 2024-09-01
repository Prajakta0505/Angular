import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateStudentComponent } from './create-student/create-student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AllP';
  constructor(private _dialog:MatDialog) { }
openAddEditForm()
{
  this._dialog.open(CreateStudentComponent)
}

  ngOnInit(): void {
  }
}