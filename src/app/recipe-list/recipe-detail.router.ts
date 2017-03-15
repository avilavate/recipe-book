import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail.component';
import { EditRecipeComponent } from "app/edit-recipe/edit-recipe.component";

export const recipesRoutes: Routes = [
    { path: ':name', component: RecipeDetailComponent },
    { path: ':edit/:name', component: EditRecipeComponent }
];

//export const childRouting = RouterModule.forChild(recipesRoutes);