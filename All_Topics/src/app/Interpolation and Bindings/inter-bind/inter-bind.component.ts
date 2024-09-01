import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-bind',
  templateUrl: './inter-bind.component.html',
  styleUrls: ['./inter-bind.component.css']
})
export class InterBindComponent implements OnInit {

   public name ="Praju"
public newId ="nisha";
public colval="2";

isButtonDisabled : boolean = false;
isButtonDisabled2:boolean=false;

public lastname="Shinde";

  constructor() { }
  mydata()
    {
      alert("hey...!i am event handing");
    }

  ngOnInit(): void {
    

  }

}