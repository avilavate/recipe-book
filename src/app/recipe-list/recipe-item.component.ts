import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe, RecipesService } from "../shared";


@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit {

  constructor(public recipesService: RecipesService, public activatedRout: ActivatedRoute) {
    
  }

  ngOnInit() {
  }
  @Input() recipe: Recipe;
}
