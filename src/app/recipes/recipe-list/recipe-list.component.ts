import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Test Recipie', 'A simple dummy Test Recipie', 'https://get.pxhere.com/photo/cafe-tea-dish-food-produce-vegetable-meat-lunch-pork-cuisine-delicious-steak-pork-chop-dinner-new-zealand-western-ribs-grilling-spare-ribs-fox-glacier-pork-ribs-fried-food-animal-source-foods-556368.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Test Recipie 2', 'A simple dummy Test Recipie 2', 'https://get.pxhere.com/photo/cafe-tea-dish-food-produce-vegetable-meat-lunch-pork-cuisine-delicious-steak-pork-chop-dinner-new-zealand-western-ribs-grilling-spare-ribs-fox-glacier-pork-ribs-fried-food-animal-source-foods-556368.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
