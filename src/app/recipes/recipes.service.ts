import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingService) {

  }
  private recipes: Recipe[] = [
    new Recipe("Test",
               "A test recipe",
               "https://media4.s-nbcnews.com/i/newscms/2020_16/1558143/martha-recipes-today-main-200413_41de0fe80755b18142fdcfefdeca654a.jpg",
               [
                 new Ingredient("Meat", 1),
                 new Ingredient("Fries", 20)
               ]),
    new Recipe("Test",
               "A second recipe",
               "https://media4.s-nbcnews.com/i/newscms/2020_16/1558143/martha-recipes-today-main-200413_41de0fe80755b18142fdcfefdeca654a.jpg",
               [
                 new Ingredient("Bread", 1),
                 new Ingredient("Apples", 20)
               ])
  ];

  getRecipes() {
    return this.recipes.slice(); // Javascript returns references, using slice allows returning a copy of the array instead of a ref to the real thing
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
