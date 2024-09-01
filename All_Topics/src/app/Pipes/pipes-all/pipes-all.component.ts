import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-all',
  templateUrl: './pipes-all.component.html',
  styleUrls: ['./pipes-all.component.css']
})
export class PipesAllComponent implements OnInit {

public channelName="Learning never ends"
public name="PRAJU"
public Titile="if wE do haRD work then we get success"; 
public person=[{
  name:'praju',
  lastname:'gangrde',
  email:'prajakta123@gmail.com',
}];
public dobDate = '12,3,2000'; 

 constructor() { }

  ngOnInit(): void {
  }
  amount = 1000.50;
}
