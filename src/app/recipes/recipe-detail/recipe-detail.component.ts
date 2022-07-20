import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  index!: number;

  constructor(private recipeService: RecipeService,
              private route:ActivatedRoute,private router:Router) {

              }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
        this.index=+params['id']
        this.recipe=this.recipeService.getRecipe(this.index)
    })
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

}
