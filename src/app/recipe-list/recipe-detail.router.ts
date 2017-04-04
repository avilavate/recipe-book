import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail.component';
import { EditRecipeComponent } from "app/edit-recipe/edit-recipe.component";
import { AuthGuardService } from "app/shared/auth-guard.service";

export const recipesRoutes: Routes = [
    { path: ':name', component: RecipeDetailComponent , canActivate: [AuthGuardService] },
    { path: ':edit/:name', component: EditRecipeComponent , canActivate: [AuthGuardService] }
];

//export const childRouting = RouterModule.forChild(recipesRoutes);