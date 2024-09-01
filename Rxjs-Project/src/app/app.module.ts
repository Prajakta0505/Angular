import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './includs/header/header.component';
import { PromiceComponent } from './includs/promice/promice.component';
import {MatButtonModule} from '@angular/material/button';
import { AwaitComponent } from './includs/await/await.component';
import { ObservablesComponent } from './includs/observables/observables.component';

import { FromEventComponent } from './includs/observables/from-event/from-event.component';
import { ListComponent } from './includs/observables/list/list.component';
import { IntervalComponent } from './includs/observables/interval/interval.component';
import { OfFromComponent } from './includs/observables/of-from/of-from.component';
import { ToArrayComponent } from './includs/observables/to-array/to-array.component';
import { CustomObservableComponent } from './includs/observables/custom-observable/custom-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiceComponent,
    AwaitComponent,
    ObservablesComponent,
 
    FromEventComponent,
      ListComponent,
      IntervalComponent,
      OfFromComponent,
      ToArrayComponent,
      CustomObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
