import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from "app/shared";
import { Http } from "@angular/http";

@Component({
  selector: 'rb-new-recipe',
  templateUrl: './new-recipe.component.html'
})
export class NewRecipeComponent  {
  newRecipe: Recipe;
  constructor(private http: Http,  public router:Router) { }
  onSubmit(form: NgForm) {
    if (!form.valid) return;
    this.newRecipe = new Recipe(form.value.recipeName, form.value.recipeDesc, null, []);
    this.http.post("https://recipe-book-264a0.firebaseio.com/data.json", this.newRecipe).subscribe(
      data => { console.log("Success: " + data) },
      error => { console.log(error) },
      () => { console.log("request completed!") });
      this.router.navigate(["/"]);
  }
}
