import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail.component';
import { EditRecipeComponent } from "app/edit-recipe/edit-recipe.component";
import { AuthGuardService } from "app/shared/auth-guard.service";
import { RecipeListComponent } from "app/recipe-list/recipe-list.component";

export const recipesRoutes: Routes = [
    { path: ':name', component: RecipeDetailComponent, canActivate: [AuthGuardService] },
    { path: ':edit/:name', component: EditRecipeComponent, canActivate: [AuthGuardService] }
];

export const RecipesListRoutes: Routes = [
    { path: 'recipe-list', component: RecipeListComponent, children: recipesRoutes, canActivate: [AuthGuardService] }
]

export const childRouting = RouterModule.forChild(RecipesListRoutes);