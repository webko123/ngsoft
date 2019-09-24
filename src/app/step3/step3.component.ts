import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
export interface Pass {
  id: number;
   title: string;
 }
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})





export class Step3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  passes:Pass[] = [
    {id: 1, title: 'טול כרם'},
    {id: 2, title: 'שער אפריים'},
    {id: 3, title: 'אחר'},
  ];



  name = new FormControl('', [Validators.required]);
  adress = new FormControl('', [Validators.required]);
  pass = new FormControl('', [Validators.required]);
  driver = new FormControl('', [Validators.required]);
  id = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);


  getErrorMessage() {
    return this.name.hasError('required') ? 'יש למלא שדה זה' :
     this.adress.hasError('required') ? 'יש למלא שדה זה' :
     this.pass.hasError('required') ? 'יש למלא שדה זה' :
     this.driver.hasError('required') ? 'יש למלא שדה זה' :
     this.id.hasError('required') ? 'יש למלא שדה זה' :
     this.phone.hasError('required') ? 'יש למלא שדה זה' :
        
            '';
  }
}

