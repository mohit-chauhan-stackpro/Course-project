import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingredients: Ingredients[]=[
    new Ingredients('Tomatoes',10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
