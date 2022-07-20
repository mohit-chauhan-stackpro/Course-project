import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
recipeSelected=new EventEmitter<Recipe>();

private recipes: Recipe[]=[
    new Recipe('Test Recipe','This is test recipe','https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466__340.jpg')
    ,new Recipe('Another Test Recipe','This is Another test recipe','https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466__340.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
