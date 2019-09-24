import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
export interface Category {
 unit: number;
  title: string;
}

export interface Unit {
  unit: number;
   title: string;
 }

 export interface Material {
  unit: string;
  inventoryNumber:String;
  inventoryName: string;
  casNumber: string;
  molecularFormula: string;

 }

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  


  ngOnInit() {

  }

  
  categories: Category[] = [
    {unit: 1, title: 'חקלאות'},
    {unit: 2, title: 'בריאות'},
    {unit: 3, title: 'תעשייתי'},
    {unit: 4, title: 'אחר'},
  ];

  units: Unit[] = [
    {unit: 1, title: 'גרם'},
    {unit: 2, title: 'ליטר'},
    {unit: 3, title: 'טון'},
    {unit: 4, title: 'מטר'},
  ];

  name = new FormControl('', [Validators.required]);
  target = new FormControl('', [Validators.required]);
  category = new FormControl('', [Validators.required]);
  big = new FormControl('', [Validators.required]);
  unit = new FormControl('', [Validators.required]);
  


  getErrorMessage() {
    return this.name.hasError('required') ? 'יש למלא שדה זה' :
     this.target.hasError('required') ? 'יש למלא שדה זה' :
     this.category.hasError('required') ? 'יש למלא שדה זה' :
     this.big.hasError('required') ? 'יש למלא שדה זה' :
     this.unit.hasError('required') ? 'יש למלא שדה זה' :
     
        
            '';
  }

  // materials: Material[] = [
  
  //   {
  //     unit: '5d67a432074512ed1a969d57',
  //     inventoryNumber: '273-381-6',
  //     inventoryName: 'bis[O,O-bis(2-ethylhexyl)',
  //     casNumber: '68958-92-9',
  //     molecularFormula: 'C32H68Mo2O6P2S6'
  //   },
  //   {
  //     unit: '5d67a432074512ed1a96bd5d',
  //     inventoryNumber: '235-156-0',
  //     inventoryName: 'hexacarbonylbis(?5-cyclopenta-2,4-dien-1-yl)',
  //     casNumber: '12091-64-4',
  //     molecularFormula: 'C16H10Mo2O6'
  //   },
  //   {
  //     unit: '5d67a433074512ed1a96fd49',
  //     inventoryNumber: '268-169-5',
  //     inventoryName: 'cobalt dimolybdenum nickel octaoxunite',
  //     casNumber: '68016-03-5',
  //     molecularFormula: 'CoMo2NiO8'
  //   },
  //   {
  //     unit: '5d67a433074512ed1a96fdf7',
  //     inventoryNumber: '269-841-0',
  //     inventoryName: 'hexa[2-[3-(1,3-dihydro-1,3,3-trimethyl-2H-indol-2-ylunitene)',
  //     casNumber: '68334-65-6',
  //     molecularFormula: 'C25H29N2.1/6Mo24O77Si'
  //   },
  //   {
  //     unit: '5d67a433074512ed1a972483',
  //     inventoryNumber: '245-322-4',
  //     inventoryName: 'dimolybdenum trizinc nonaoxunite',
  //     casNumber: '22914-58-5',
  //     molecularFormula: 'Mo2O9Zn3'
  //   },
  //   {
  //     unit: '5d67a433074512ed1a972da2',
  //     inventoryNumber: '265-649-6',
  //     inventoryName: 'dihydrogen molybdate, compound with 1,3,5-triazine-2,4,6-triamine (1:1)',
  //     casNumber: '65235-34-9',
  //     molecularFormula: 'C3H6N61/2Mo2O7'
  //   }
  // ];


}
