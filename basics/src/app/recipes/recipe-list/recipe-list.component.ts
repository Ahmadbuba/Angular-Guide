import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Grilled Chicken', 'A simple recipe for grilling', 'https://www.themediterraneandish.com/wp-content/uploads/2020/07/harissa-chicken-recipe-7.jpg'),
    new Recipe('Fried Rice', 'Another Recipe', 'https://cheflolaskitchen.com/wp-content/uploads/2015/06/Fried-Rice-20.jpg.webp'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

