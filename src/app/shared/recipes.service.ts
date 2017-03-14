import { Injectable } from '@angular/core';
import { Recipe, Ingradients } from "../shared";


@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [];
  constructor() {

    this.recipes.push(new Recipe('Tometo Salad', 'Salad is good for health if its not tossed', './app/recipe-list/images/tomato_salad.jpg',
      new Array<Ingradients>(new Ingradients("Tomato", 2), new Ingradients("Olive Oil", "10 ml"))));
    this.recipes.push(new Recipe('Biryani', 'Steamed rice with saffron and choice of chicked/mutton', './app/recipe-list/images/biryani.jpg',
      new Array<Ingradients>(new Ingradients("Rice", "2 kg"), new Ingradients("Chicken", "1.5 kg"))));
  }
  getRecipes(): Recipe[] {
    return this.recipes;
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
  }
  getRecipebyName(name: string): Recipe {
    if(!name) return null;
    let selectedRecipes = this.recipes.filter((recipe) => { return recipe.name === name; });
    return selectedRecipes[0];    
  }
}
