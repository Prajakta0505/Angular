import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promice',
  templateUrl: './promice.component.html',
  styleUrls: ['./promice.component.css']
})
export class PromiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let buyLaptop = new Promise(function(resolve, reject) {
      resolve("data");
    });

    buyLaptop.then(function(res) {
      console.log(res);
    });

    const isDellAvailable = false;
    const isHpAvailable = false;

    const BuyLaptop = new Promise(function(resolve, reject) {
      setTimeout(() => {
        if (isDellAvailable) {
          resolve("Dell-Bought");
        } else if (isHpAvailable) {
          resolve("Hp-Bought");
        } else {
          reject("No Laptop found..!!!");
        }
      }, 2000);
      console.log("Buying");
    });

    BuyLaptop.then(res => {
      console.log(res);
    }).catch(res => {
      console.log(res);
    });
  
   
  //async keyword with function always return promise

 async function getdata()
  {
    return 'Data Received'
  }
//  console.log(getdata());
getdata().then(data => console.log(data));
// getdata().then(console.log);

     //Await
     let bye=new Promise(function(resolve,reject){
      setTimeout(() =>
      {
        resolve('Data Received')
      },3000);

     })

     async function getMyData()
     {
      let response= await Promise;
      console.log(response)
     }
    getMyData();
  
    }
    
  }
