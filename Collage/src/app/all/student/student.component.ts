import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  id: number;
  name: string;
  contact: number;
  course: string;
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'contact', 'course'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  name!: string;
  Id!: number;
  weight!: number;
  symbol!: string;

  constructor() { }

  ngOnInit(): void {
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Prajakta', contact: 8975515088, course: 'Java'},
  {id: 2, name: 'Priti', contact: 9876787654, course: 'Python'},
  {id: 2, name: 'Puja',  contact: 9467564360, course: 'Java'},
  {id: 4, name: 'Smita', contact: 9743127805, course: 'Angular'},
  {id: 5, name: 'Kajal', contact: 8789534567, course: 'Python'},
  {id: 6, name: 'Kirti', contact: 8987654567, course: 'Java'},
  {id: 7, name: 'Praju', contact: 9754345678, course: 'Angular'},
  {id: 8, name: 'Snehal',contact: 8954678432, course: 'Java'},
  {id: 9, name: 'Prena', contact: 8975432088, course: 'Python'},
  {id: 10, name: 'Aria', contact: 9123515088, course: 'Angular'},
  {id: 11, name: 'Bella',contact: 9175515088, course: 'Java'},
  {id: 12, name: 'Prajakta', contact: 9125515088, course: 'Python'},
  {id: 13, name: 'Aakansha', contact: 8765515088, course: 'Java'},
  {id: 14, name: 'Pritiksha',contact: 9175515088, course: 'Angular'},
  {id: 15, name: 'Poonam', contact: 8975567088, course: 'Java'},
  {id: 16, name: 'Vrushali',contact: 8975515088, course: 'Java'},
  {id: 17, name: 'Vaishnavi',contact: 9145515088, course: 'Angular'},
  {id: 18, name: 'Rupali', contact: 9175515078, course: 'Java'},
  {id: 19, name: 'Nita',   contact: 9325869345, course: 'Python'},
  {id: 20, name: 'Nisha',  contact: 9130551950, course: 'Angular'},
];
