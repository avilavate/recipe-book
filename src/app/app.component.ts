import { Component } from '@angular/core';
import {RecipesService} from './shared/recipes.service';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  providers:[RecipesService]
})
export class AppComponent {
  constructor(){}
}
