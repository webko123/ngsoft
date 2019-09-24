import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface Tobin {
  id: number;
  title: string;
}

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {


 
  

  constructor( ) { 

 
  }

  ngOnInit() {

  
  }
  tobins: Tobin[] = [
    {id: 1, title: 'ישראל'},
    {id: 2, title: 'חוץ לארץ'},
   
  ];

  name = new FormControl('', [Validators.required]);
  bag = new FormControl('', [Validators.required]);
  tobin = new FormControl('', [Validators.required]);
  fullName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  id = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  


  getErrorMessage() {
    return this.name.hasError('required') ? 'יש למלא שדה זה' :
     this.bag.hasError('required') ? 'יש למלא שדה זה' :
     this.tobin.hasError('required') ? 'יש למלא שדה זה' :
     this.fullName.hasError('required') ? 'יש למלא שדה זה' :
     this.email.hasError('required') ? 'יש למלא שדה זה' :
     this.id.hasError('required') ? 'יש למלא שדה זה' :
     this.phone.hasError('required') ? 'יש למלא שדה זה' :
     
     
        
            '';
  }


 
}
