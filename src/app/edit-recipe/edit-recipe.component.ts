import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RecipesService } from '../shared'

@Component({
  selector: 'rb-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styles: []
})
export class EditRecipeComponent {
  constructor(public recipeService: RecipesService, public router: Router) { }
  onSubmit(f: NgForm) {
    if (f.valid)
      this.router.navigate(["recipe-list"]);
  }
}
