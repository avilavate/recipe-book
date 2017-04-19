import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRecipeComponent } from "app/edit-recipe/edit-recipe.component";
import { NewRecipeComponent } from "app/new-recipe/new-recipe.component";
import { RecipeDetailComponent } from "app/recipe-list/recipe-detail.component";
import { RecipeItemComponent } from "app/recipe-list/recipe-item.component";
import { RecipeListComponent } from "app/recipe-list/recipe-list.component";
import { NotFoundComponent } from "app/not-found/not-found.component";
import { FormsModule } from "@angular/forms";
import { childRouting, RecipeRoutingModule } from "app/recipe-list/recipe-detail.router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecipeRoutingModule
  ],
  declarations: [
    EditRecipeComponent,
    NewRecipeComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
//    NotFoundComponent
  ],
  exports:[RecipeListComponent]
})
export default class RecipesModule { }
