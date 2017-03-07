import { Component, OnInit, EventEmitter, Output, Input, OnChanges, Injectable, Inject } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { RecipesService } from '../shared/recipes.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
@Injectable()
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() selectedevent = new EventEmitter();
  @Input() deletedRecipe: Recipe = new Recipe("", "", "");
  constructor(public recSvc: RecipesService) {
    this.selectedevent.emit(this.recipes[0]);
  }
  //Inmit with data (Recs)
  ngOnInit() {
    this.recipes = this.recSvc.getRecipes();
  }

  //raise custom event
  onSelected(selecteRecipe: Recipe) {
    console.log(selecteRecipe);
    this.selectedevent.emit(selecteRecipe)
  }

  addRecipe() {
    this.recSvc.addRecipe(new Recipe("Kebab", "An Afan delicay prepared on charcoal", "./app/recipe-list/images/kebab.jpg",[]));
  }
}