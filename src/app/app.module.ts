import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule, MatInputModule, MatButtonModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { Step2Component } from './step2/step2.component';
import { Step1Component } from './step1/step1.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Step3Component } from './step3/step3.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { FinalStepComponent } from './final-step/final-step.component';

import {MatDividerModule} from '@angular/material/divider';








@NgModule({
  declarations: [
    AppComponent,
    Step2Component,
    Step1Component,
    Step3Component,
    FinalStepComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatTooltipModule,
    MatChipsModule,
    MatDividerModule
    

    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
