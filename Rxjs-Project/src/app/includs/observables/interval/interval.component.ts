import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
Obsmsg:any;
videoSubscription!:Subscription;
  constructor(private _designUService:DesignUtilityService) { }

  ngOnInit(): void {
    // const broadCastVideos= interval(1000);
    const broadCastVideos=timer(5000,1000)   //timer(delay,interval)

   this.videoSubscription= broadCastVideos.subscribe(res =>{
      console.log(res);
      this.Obsmsg='video'+ res;
      this._designUService.print(this.Obsmsg,'elContainer');
      this._designUService.print(this.Obsmsg,'elContainer2');
      this._designUService.print(this.Obsmsg,'elContainer3');
      if(res >=5)
      {
        this.videoSubscription.unsubscribe();
      }
    })
  }
}