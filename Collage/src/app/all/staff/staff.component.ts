import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  no: number;
  name: string;
  contact: number;
  position: string;
}
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['no', 'name', 'contact', 'position'];
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
  {no: 1, name: 'Prakash Kale', contact: 9934654321, position: 'IT Coordinater'},
  {no: 1, name: 'Nita Satale',  contact: 8975515088, position: 'Professor'},
  {no: 1, name: 'Karan Shinde', contact: 9325869215, position: 'Professor'},
  {no: 1, name: 'Priti Jagatp', contact: 9934567871, position: 'Office Manager'},
  {no: 1, name: 'Rupali Surose',contact: 7865430321, position: 'Professor'},
];
