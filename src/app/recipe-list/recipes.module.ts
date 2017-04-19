import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { RecipeRoutingModule } from './recipe-detail.router';
import { EditRecipeComponent } from "../edit-recipe/edit-recipe.component";
import { NewRecipeComponent } from "../new-recipe/new-recipe.component";
import { RecipeDetailComponent } from "./recipe-detail.component";
import { RecipeItemComponent } from "./recipe-item.component";
import { RecipeListComponent } from "./recipe-list.component";


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
export  class RecipesModule { }
