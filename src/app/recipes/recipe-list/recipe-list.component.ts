import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test", "A test recipe", "https://media4.s-nbcnews.com/i/newscms/2020_16/1558143/martha-recipes-today-main-200413_41de0fe80755b18142fdcfefdeca654a.jpg"),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
