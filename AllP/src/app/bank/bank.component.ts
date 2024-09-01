import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  StoreBankData:any;
  originaldata:any;

  displayedColumns: string[] = ['srn', 'id', 'name', 'province', 'city', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router) {}
  navigateToBankDetails() {
    this.router.navigate(['/bankdetails']);
  }
  ngOnInit(): void {
   this.StoreBankData = localStorage.getItem('bank_data');
   this.originaldata = JSON.parse(this.StoreBankData);
   this.dataSource = new MatTableDataSource(this.originaldata);
  }
  deletebankData(element: any) {
    this.dataSource.data = this.dataSource.data.filter(bank => bank !== element);
    localStorage.setItem('formData', JSON.stringify(this.dataSource.data));
  }
  bankdataEdit(element:any)
  {
   this.router.navigate(['/bankdetails'],{state:  { editBank: element} });
  }
  }