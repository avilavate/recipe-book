import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit, OnChanges {
  recipes: Recipe[] = [];
  @Output() selectedevent = new EventEmitter();
  @Input() deletedRecipe: Recipe = new Recipe("", "", "");
  constructor() {
    for (let i = 0; i < 2; i++) {
      this.recipes.push(new Recipe('Dummy', 'A Dummy decription text- describinmg the recipe in brief.', './app/recipe-list/images/recipe.png'));
    }
    this.selectedevent.emit(this.recipes[0]);
  }
  //raise custom event
  onSelected(selecteRecipe: Recipe) {
    console.log(selecteRecipe);
    this.selectedevent.emit(selecteRecipe)
  }

  ngOnChanges() {
        console.log('onChange fired');
       // console.log('changing', args);
    }
  addRecipe() {
    console.log();
    this.recipes.push(new Recipe('Dummy' + Math.random().toString(), 'A Dummy decription text- describinmg the recipe in brief.', './app/recipe-list/images/recipe.png'));
  }
  ngOnInit() {
  }


  recipe: Recipe = new Recipe('Dummy', 'A Dummy decription text- describinmg the recipe in brief.', './images/recipe.png');
}
