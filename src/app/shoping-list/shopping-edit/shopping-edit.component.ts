import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// @ViewChild('nameInput')  nameInputRef:ElementRef;
// @ViewChild('amountInput')  amountInputRef:ElementRef;
  @ViewChild('nameInput')
  nameInputRef!: ElementRef;
  @ViewChild('amountInput')
  amountInputRef!: ElementRef;
  @Output() ingredientAdded=new EventEmitter<Ingredients>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value
    const ingAmount=this.amountInputRef.nativeElement.value
    const newIngredient=new Ingredients(ingName,ingAmount)
    this.slService.addIngredient(newIngredient)
  }

}
