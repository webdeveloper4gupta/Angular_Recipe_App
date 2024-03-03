// import { Component,ViewChild,ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
// import { Ingredient } from 'src/app/shared/ingredient.model';

// @Component({
//   selector: 'app-shopping-edit',
//   templateUrl: './shopping-edit.component.html',
//   styleUrls: ['./shopping-edit.component.css']
// })
// export class ShoppingEditComponent implements OnInit{
//  @ViewChild('nameInput', { static: true })nameInput!: ElementRef;
//  @ViewChild('amountInput', { static: true })amountInput!: ElementRef;
//  @Output() ingredientAdded=new EventEmitter<Ingredient>();
// constructor(){

// }
// ngOnInit(): void {
  
// }
//   onAddItem(){
//     // const ingName=this.nameInput.nativeElement.value;
//     // const ingAmount=this.amountInput.nativeElement.value;
//     // const newIngredient=new Ingredient(ingName,ingAmount);
//     // this.ingredientAdded.emit(newIngredient);
//     console.log(this.nameInput.nativeElement.value);
//     console.log(this.amountInput.nativeElement.value)
//   }
// }

import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService:ShoppingListService) {}

  ngOnInit() {
  }

  onAddItem() {
    if(this.nameInputRef && this.amountInputRef){
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingName, ingAmount);
    // this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
    }
      }

}
