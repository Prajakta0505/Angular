import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

obsmsg:any;

constructor(private _utilityService:DesignUtilityService) { }

  ngOnInit(): void {
    //of
    const Obs1=of('Prajakta','Rajendra','Gangarde');
    Obs1.subscribe(res =>
      {
        console.log(res);
        this._utilityService.print(res,'elContainer')
      });

//second of

      const Obs2=of({Name:'Prajakta',MiddleName:'Rajendra',LastName:'Gangarde'});
      Obs2.subscribe(res =>
        {
         this.obsmsg=res;
         console.log('obsmsg =>',res);
        });

        //from1
        
        const Obs3= from (['karan','sachin','shinde']);
        Obs3.subscribe(res=>{
          console.log(res);
          this._utilityService.print(res,'elContainer3')
        })

        //promice to observable
    }
  }