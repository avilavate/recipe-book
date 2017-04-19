import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail.component';
import { EditRecipeComponent } from "app/edit-recipe/edit-recipe.component";
import { AuthGuardService } from "app/shared/auth-guard.service";
import { RecipeListComponent } from "app/recipe-list/recipe-list.component";
import { NewRecipeComponent } from "app/new-recipe/new-recipe.component";

export const recipesRoutes: Routes = [
    { path: ':name', component: RecipeDetailComponent, canActivate: [AuthGuardService] },
    { path: ':new/', component: NewRecipeComponent, canActivate: [AuthGuardService] },
    { path: ':edit/:name', component: EditRecipeComponent, canActivate: [AuthGuardService] }
];

export const RecipesListRoutes: Routes = [
    { path: '', component: RecipeListComponent, children: recipesRoutes },

]

export const childRouting = RouterModule.forChild(RecipesListRoutes);
@NgModule({
    imports: [childRouting],
    exports: [RouterModule]
})
export class RecipeRoutingModule { }
