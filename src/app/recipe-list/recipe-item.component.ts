import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../shared";
@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() recipe:Recipe;
}
