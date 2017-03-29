import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipesService } from '../shared'
import { Recipe } from "app/shared/recipe";
import { Ingradients } from "app/shared/ingradients";

@Component({
  selector: 'rb-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styles: []
})
export class EditRecipeComponent {
  param: string;
  fields: { [key: string]: string | Array<Ingradients> } = {};
  constructor(public recipeService: RecipesService, public activatedRoute: ActivatedRoute, public router: Router) {
    this.activatedRoute.params.subscribe((param) => {
      this.param = param['name']
      let existingRecipe = this.recipeService.getRecipebyName(this.param);
      this.fields["name"] = existingRecipe.name;
      this.fields["description"] = existingRecipe.description;
      this.fields["imagePath"] = existingRecipe.imagePath;
      this.fields["ingredients"] = existingRecipe.ingradients;
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
