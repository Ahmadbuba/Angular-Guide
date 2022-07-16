import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.themediterraneandish.com/wp-content/uploads/2020/07/harissa-chicken-recipe-7.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
