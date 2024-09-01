import { Component, OnInit } from '@angular/core';
import { from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  users=[
    {name:'praju',skill:'Angular'},
    {name:'karan',skill:'HTml,css'},
    {name:'vaibhav',skill:'Javascript'},
    {name:'Rupali',skill:'Typescript'}
  ]

  constructor() { }

  ngOnInit(): void {

    const source=interval(1000);
    const subscription= source.pipe(take(5),toArray()).subscribe(res =>{
      console.log(res);
     
// if(res >=5)
// {
//   subscription.unsubscribe();
// }     
});
    // setTimeout(() => {
    //   subscription.unsubscribe();
      
    // }, 3000);

    //example-02
    const source2=from(this.users);
    source2.pipe(toArray()).subscribe(res=>{
      console.log(res)
    }) 

    //Ex-03
      const source3=of('Aarti','rahul','Gangarde');
      source3.pipe(toArray()).subscribe(res =>{
        console.log(res);
      })
  }
}