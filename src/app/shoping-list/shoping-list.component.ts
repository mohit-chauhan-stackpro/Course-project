import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit ,OnDestroy{

  ingredients!: Ingredients[];
  private igChangeSub!:Subscription

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients= this.slService.getIngredients()
   this.igChangeSub= this.slService.ingredientsChanges.subscribe(
      (ingredients:Ingredients[])=>{
        this.ingredients=ingredients;
    })
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe()
  }
}
