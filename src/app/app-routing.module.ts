import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShopingListComponent } from "./shoping-list/shoping-list.component";

const appRoutes:Routes=[
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
  {path:'recipes',component:RecipesComponent,children:[
    {path:'',component:RecipeStartComponent},
    {path:':id',component: RecipeDetailComponent}
  ]},
  {path:'shopping-list',component:ShopingListComponent},
]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
