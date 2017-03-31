import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe, RecipesService } from '../shared';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipeName: string;
  constructor(public recipesService: RecipesService, public activatedRout: ActivatedRoute, public route: Router) {
    this.activatedRout.params.subscribe((name) => {
      this.selectedRecipeName = name['name'];
      this.selectedRecipe = this.recipesService.getRecipebyName(this.selectedRecipeName);
    });
  }
  detailClicked() {
  
  }
  @Output() deleteEvent = new EventEmitter();
  @Input() selectedRecipe: Recipe;
  ngOnInit() {
  }
  delete() {
    this.deleteEvent.emit(this.selectedRecipe);
  }
  edit() {
    this.route.navigate(["recipe-list", "edit",this.selectedRecipeName]);
  }
  @Input() testShare: string;
  getSelectREcipe($event) {
  }
}
