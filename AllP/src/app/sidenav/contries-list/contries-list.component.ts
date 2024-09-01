import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentService } from 'src/app/services/student.service';
import { DialogCountriesComponent } from '../dialog-countries/dialog-countries.component';

export interface countries {
  id: number;
  name: string;
  capital: string;
  population: number;
  language: string;
}
@Component({
  selector: 'app-contries-list',
  templateUrl: './contries-list.component.html',
  styleUrls: ['./contries-list.component.css'],
})
export class ContriesListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'capital',
    'population',
    'language',
    'action',
  ];
  dataSource: MatTableDataSource<countries> = new MatTableDataSource<countries>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private dialog: MatDialog,
    private countryservice: StudentService
  ) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.countryservice
      .getCountryList()
      .subscribe((CountryList: countries[]) => {
        this.dataSource.data = CountryList;
      });
  }
  openAddEditForm(): void {
    const dialogRef = this.dialog.open(DialogCountriesComponent, {});
    dialogRef.componentInstance.CountryAdded.subscribe(
      (newCountry: countries) => {
        this.dataSource.data.push(newCountry);
        this.dataSource._updateChangeSubscription();
      }
    );
  }
  deleteRecord(id: number): void {
    const index = this.dataSource.data.findIndex(
      (country) => country.id === id
    );
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<countries>(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      alert('Country deleted successfully!');
    }
  }
  openAddEdit(country: countries | null = null): void {
    const dialogRef = this.dialog.open(DialogCountriesComponent, {
      data: country
    });
    dialogRef.componentInstance.CountryAdded.subscribe((updatedCountry:countries) => {
     
      const index = this.dataSource.data.findIndex(item => item.id === updatedCountry.id);
      if (index !== -1) {
        this.dataSource.data[index] = updatedCountry;
        this.dataSource._updateChangeSubscription(); 
        alert('Country updated successfully!'); 
      }
    });
  }
   viewForm(country: countries | null = null): void {
    const dialogRef = this.dialog.open(DialogCountriesComponent, {
    data:country
    });
   }
  }
