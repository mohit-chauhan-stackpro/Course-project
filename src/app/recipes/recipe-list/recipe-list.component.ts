import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('Test Recipe','This is test recipe','https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466__340.jpg')
    ,new Recipe('Test Recipe','This is test recipe','https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466__340.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
