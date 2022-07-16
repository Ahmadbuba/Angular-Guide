import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.themediterraneandish.com/wp-content/uploads/2020/07/harissa-chicken-recipe-7.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.themediterraneandish.com/wp-content/uploads/2020/07/harissa-chicken-recipe-7.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.themediterraneandish.com/wp-content/uploads/2020/07/harissa-chicken-recipe-7.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.themediterraneandish.com/wp-content/uploads/2020/07/harissa-chicken-recipe-7.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
