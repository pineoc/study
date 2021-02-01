import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedList = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test', 'https://cdn.pixabay.com/photo/2015/07/01/23/03/cocktail-828182_960_720.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test', 'https://cdn.pixabay.com/photo/2015/07/16/06/51/strawberry-mojito-847240_960_720.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onReceivedSelectedRecipe($event) {
    console.log('recipe-list/onReceivedSelectedRecipe():', $event);
    this.selectedList.emit($event);
  }

}
