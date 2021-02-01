import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 2),
    new Ingredient('salt', 1),
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onIngredientsAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }

}
