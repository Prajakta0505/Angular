import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './includs/header/header.component';
import { PromiceComponent } from './includs/promice/promice.component';
import { AwaitComponent } from './includs/await/await.component';
import { ObservablesComponent } from './includs/observables/observables.component';
import { FromEventComponent } from './includs/observables/from-event/from-event.component';
import { ListComponent } from './includs/observables/list/list.component';
import { IntervalComponent } from './includs/observables/interval/interval.component';
import { OfFromComponent } from './includs/observables/of-from/of-from.component';
import { ToArrayComponent } from './includs/observables/to-array/to-array.component';
import { CustomObservableComponent } from './includs/observables/custom-observable/custom-observable.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'promice',component:PromiceComponent},
  {path:'Await',component:AwaitComponent},
  {path:"Observables",component:ObservablesComponent,children:[
   {path:'',component:ListComponent},
   {path:'from-event',component:FromEventComponent},
   {path:'interval',component:IntervalComponent},
   {path:'Of-from',component:OfFromComponent},
   {path:'to-array',component:ToArrayComponent},
   {path:'custom',component:CustomObservableComponent}
  ]},
  {path:'',redirectTo:'header',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }