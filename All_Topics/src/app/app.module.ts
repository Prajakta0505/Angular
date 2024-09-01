import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlDirectiveDirective } from './Directive/html-directive.directive';
import { AllDirectivesComponent } from './Directive/all-directives/all-directives.component';
import { InterBindComponent } from './Interpolation and Bindings/inter-bind/inter-bind.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesAllComponent } from './Pipes/pipes-all/pipes-all.component';
import { CustomPipe } from './custom-pipe/custom.pipe';
import { FormsComponent } from './Reactive-template-Form/forms/forms.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HtmlDirectiveDirective,
    AllDirectivesComponent,
    InterBindComponent,
    PipesAllComponent,
    CustomPipe,
    FormsComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
