import { Component, OnInit, EventEmitter, Output, Input, OnChanges, Injectable, Inject } from '@angular/core';
import { Recipe, RecipesService } from '../shared';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
@Injectable()
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() selectedevent = new EventEmitter();
  @Input() deletedRecipe: Recipe = new Recipe("", "", "", []);
  constructor(public recSvc: RecipesService, public activatedRoute: ActivatedRoute, public router: Router) {
    this.selectedevent.emit(this.recipes[0]);
  }
  //Inmit with data (Recs)
  ngOnInit() {
    this.recipes = this.recSvc.getRecipes();
  }

  //raise custom event
  onSelected(selecteRecipe: Recipe) {
    this.router.navigate(['/recipe-list', selecteRecipe.name]);
  }

  onAddRecipe() {
    this.router.navigate(['/recipe-list', 'new', '']);
  }
}
