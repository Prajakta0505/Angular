import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-directives',
  templateUrl: './all-directives.component.html',
  styleUrls: ['./all-directives.component.css']
})
export class AllDirectivesComponent implements OnInit {

  condition=false;
  public display=false;
  public DisplayText="praju";
  public pizza="Cremy";
  public  value="A";
  public fruits=["Banana","Mango","apple","Graps"];
  public persons=[
    {name:"Karan",age:21,isMarried:true},
    {name:"Vaibhav",age:23,isMarried:false},
    {name:"Rahul",age:28,isMarried:true}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
