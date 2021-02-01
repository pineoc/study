import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe: Recipe;
  @Output() selectedItem = new EventEmitter<Recipe>(); // void로 가능
  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(selectedRecipe: Recipe) {
    console.log('recipe-item/onSelectRecipe():', selectedRecipe);
    this.selectedItem.emit(selectedRecipe);
    // this.selectedItem.emit(); // void로 하면
  }
}
