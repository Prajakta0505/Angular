import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { countries } from '../sidenav/contries-list/contries-list.component';
import { employees } from '../employee-list/employee-list.component';
import { EmployeeModel } from 'employeemodel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private CountryList: countries[] = [];
  private employeeList:employees[]=[];
  CountryAddedSubject: any;
  employeeAddedSubject:Subject<EmployeeModel>=new Subject<EmployeeModel>();
  
  
  getEmployeeList: any;

  constructor(private _http: HttpClient) { }

  addStudent(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/student', data);
  }

  updateStudent(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/student/${id}`, data);
  }

  getStudentList(): Observable<any> {
    return this._http.get('http://localhost:3000/student');
  }

  deleteStudentList(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/student/${id}`);
  }

  addCountry(newCountryData: countries): void {
    this.CountryList.push(newCountryData);
    this.CountryAddedSubject.next(newCountryData);
  }

  getCountryList(): Observable<countries[]> {
    return of(this.CountryList);
  }
  getCountryAddedObservable(): Observable<countries[]> {
    return this.CountryAddedSubject.asObservable();
  }

addemployee(newEmployeeData:EmployeeModel): void{
  console.log('Adding Employee:',newEmployeeData);
  this.employeeList.push(newEmployeeData);
}

getEmployeeeDetailsList():Observable<EmployeeModel[]>
{
  return of(this.employeeList);
}

getEmployeeAddedObservable():Observable<EmployeeModel>
{
return this.employeeAddedSubject.asObservable();
}
}