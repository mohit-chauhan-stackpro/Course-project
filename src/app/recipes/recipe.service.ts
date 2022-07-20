import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
// recipeSelected=new Subject<Recipe>();

private recipes: Recipe[]=[
    new Recipe('Test Recipe',
    'This is test recipe',
    'https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466__340.jpg',
    [
      new Ingredients('Meat',1),
      new Ingredients('French Fries',20)
    ])
    ,new Recipe('Another Test Recipe',
    'This is Another test recipe',
    'https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466__340.jpg',
    [
      new Ingredients('buns',2),
      new Ingredients('Meat',1)
    ])
  ];

  constructor(private slService:ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(id:number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients:Ingredients[]){
    this.slService.addIngredients(ingredients)
  }
}
