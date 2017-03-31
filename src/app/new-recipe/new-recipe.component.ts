import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe, RecipesService } from "app/shared";
import { Http } from "@angular/http";

@Component({
  selector: 'rb-new-recipe',
  templateUrl: './new-recipe.component.html'
})
export class NewRecipeComponent {
  private fireBaseUrl: string = "https://recipe-book-264a0.firebaseio.com/data.json";
  newRecipe: Recipe;

  constructor(private http: Http, public router: Router, public recipesService: RecipesService) { }
  onSubmit(form: NgForm) {
    if (!form.valid) return;
    form.value.recipeImage = form.value.recipeImage == "" ? '../../assets/images/kebab.jpg' : form.value.recipeImage;
    this.newRecipe = new Recipe(form.value.recipeName, form.value.recipeDesc, form.value.recipeImage, []);
    this.http.post(this.fireBaseUrl, this.newRecipe).subscribe(
      data => {
        console.log("Success: " + data);
        //Temperory fix ToDo: Remove this code later
        this.recipesService.addRecipe(this.newRecipe);
      },
      error => {
        console.log(error)
      },
      () => {
        console.log("request completed!")
      });
    this.router.navigate(["/"]);
  }
}
