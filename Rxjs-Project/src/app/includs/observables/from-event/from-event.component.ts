import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit {
  @ViewChild('addBtn') addBtn!: MatButton;

  constructor(private designUtility:DesignUtilityService) { }

  ngAfterViewInit(): void {
    let count=1;
    fromEvent(this.addBtn._elementRef.nativeElement, 'click').subscribe(res => {
      let countVal='Video'+count++
      console.log( countVal,'elContainer');
      this.designUtility.print(countVal,'elContainer');
      this.designUtility.print(countVal, 'elContainer2');
 
      // this.print(countVal,'elContainer');'
      // this.print(countVal,'elContainer2');
    });
  }
 
}
