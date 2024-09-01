import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-await',
  templateUrl: './await.component.html',
  styleUrls: ['./await.component.css']
})
export class AwaitComponent implements OnInit {
  BuyLaptop!: Promise<any>; // Define BuyLaptop as a class property

  constructor() { }

  ngOnInit(): void {
  }

  fetch1() {
    let result1 = document.getElementById('result1');
    if (result1) {
      result1.innerText = 'Fetching data....!!!';
    }

    let dell = {
      brand: 'Dell',
      hardDisk: '2TB',
      color: 'Black'
    };

    this.BuyLaptop = new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve(dell);
      }, 2000);
    });

    this.BuyLaptop.then(res => {
      console.log(res);
      if (result1) {
        result1.innerText = JSON.stringify(res); 
      }
    });
  }
//this is Ex 2
  async fetch2() {
    let result2 = document.getElementById('result2');
    if (result2) {
      result2.innerText = 'Fetching data...!!!!';
    }

    let data = await this.BuyLaptop; 
    console.log(data);
    if (result2) {
      result2.innerText = JSON.stringify(data);
    }
  }
    fetch3() {
      let result3 = document.getElementById('result3');
      if (result3) {
        result3.innerText = 'Fetching data...!!!!';
      }

      let buyLaptop2=fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())


      buyLaptop2.then(res =>
        {
          console.log(res);
          if(result3)
          {
          result3.innerText=JSON.stringify(res);
          }
        })
  }


}
