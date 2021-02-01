import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  receivedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onReceivedSelectedList($event) {
    console.log('recipe/onReceivedSelectedList():', $event);
    this.receivedRecipe = $event;
  }

}
