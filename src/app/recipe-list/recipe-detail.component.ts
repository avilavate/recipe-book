import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe, RecipesService } from '../shared';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipeName: string;
  constructor(public recipesService: RecipesService, public activatedRout: ActivatedRoute) {
    this.activatedRout.params.subscribe((name) => {
      this.selectedRecipeName = name['name'];
      this.selectedRecipe = this.recipesService.getRecipebyName(this.selectedRecipeName);
    });
  }
  detailClicked() {
    console.log(this.testShare);
  }
  @Output() deleteEvent = new EventEmitter();
  @Input() selectedRecipe: Recipe;
  ngOnInit() {
  }
  delete() {
    console.log("For deleteing recipe selected " + this.selectedRecipe);
    this.deleteEvent.emit(this.selectedRecipe);
  }
  @Input() testShare: string;
  getSelectREcipe($event) {
    alert("Hi");
    console.log($event);
  }
}
