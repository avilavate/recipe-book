import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeRootComponent } from './recipe-root.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-list/recipe-detail.component';
import { RbDropdownDirective } from './users/rb-dropdown.directive';
import {RecipesService} from './shared/recipes.service';
import { routing } from './routes';
import { childRouting } from "app/recipe-list/recipe-detail.router";

@NgModule({
  declarations: [
    AppComponent,
    RecipeRootComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RbDropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    childRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
