import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanges=new Subject<Ingredients[]>();

  ingredients: Ingredients[]=[
    new Ingredients('Apple',10),
    new Ingredients('Tomatoes',10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredients){
    this.ingredients.push(ingredient)
    this.ingredientsChanges.next(this.ingredients.slice())
  }

  addIngredients(ingredients:Ingredients[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients)
    this.ingredientsChanges.next(this.ingredients.slice())
  }
}
