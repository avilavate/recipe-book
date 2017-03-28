import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipesService } from '../shared'
import { Recipe } from "app/shared/recipe";

@Component({
  selector: 'rb-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styles: []
})
export class EditRecipeComponent {
  param: string;
  constructor(public recipeService: RecipesService, public activatedRoute: ActivatedRoute,public router:Router) {
    this.activatedRoute.params.subscribe((param) => {
      this.param = param['name']
    });
  }
  onSubmit(f: NgForm) {
    if (f.valid) {
      let recipeName = f.value.recipeName;
      
      this.recipeService.editRecipe(this.param, new Recipe(f.value.recipeName, f.value.recipeDesc, null, []));
      this.router.navigate(["recipe-list"]);
    }
  }
}
