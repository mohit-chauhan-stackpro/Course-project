import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingredients!: Ingredients[];
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients= this.slService.getIngredients()
    this.slService.ingredientsChanges.subscribe(
      (ingredients:Ingredients[])=>{
        this.ingredients=ingredients;
    })
  }
}
