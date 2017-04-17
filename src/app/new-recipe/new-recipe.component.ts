import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe, RecipesService } from "app/shared";
import { Http } from "@angular/http";
import { ToastsManager } from "ng2-toastr/ng2-toastr";

@Component({
  selector: 'rb-new-recipe',
  templateUrl: './new-recipe.component.html'
})
export class NewRecipeComponent {
  private fireBaseUrl: string = "https://recipe-book-264a0.firebaseio.com/data.json";
  newRecipe: Recipe;

  constructor(private http: Http,
    public router: Router,
    public recipesService: RecipesService,
    public toastr: ToastsManager,
    vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    form.value.recipeImage = form.value.recipeImage == "" ? '../../assets/images/kebab.jpg' : form.value.recipeImage;
    this.newRecipe = new Recipe(form.value.recipeName, form.value.recipeDesc, form.value.recipeImage, []);
    this.http.post(this.fireBaseUrl, this.newRecipe).subscribe(
      data => {
        //Temperory fix ToDo: Remove this code later
        this.recipesService.addRecipe(this.newRecipe);
        this.toastr.info("Recipe Added!");
      },
      error => {
        console.log(error)
        this.toastr.error(error);
      },
      () => {
        console.log("request completed!")
      });
    this.router.navigate(["/recipe-list"]);
  }
}
