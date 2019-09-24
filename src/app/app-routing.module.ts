import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Step3Component } from './step3/step3.component';
import { Step2Component } from './step2/step2.component';
import { Step1Component } from './step1/step1.component';
import { FinalStepComponent } from './final-step/final-step.component';
const routes: Routes = [

  { path: '', component: Step1Component },
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'final-step', component: FinalStepComponent },
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
