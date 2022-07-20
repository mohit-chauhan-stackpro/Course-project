import { Ingredients } from "../shared/ingredient.model";

export class ShoppingListService{

  ingredients: Ingredients[]=[
    new Ingredients('Apple',10),
    new Ingredients('Tomatoes',10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
}
