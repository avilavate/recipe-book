import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from "app/recipe-list/recipe-list.component";
import { ModuleWithProviders } from "@angular/core";

import { RecipeDetailComponent } from "app/recipe-list/recipe-detail.component";
import { recipesRoutes } from "app/recipe-list/recipe-detail.router";
import { NewRecipeComponent } from "app/new-recipe/new-recipe.component";
import { LoginUserComponent } from './users/login-user.component';

const routes: Routes = [
    { path: '', redirectTo: '/recipe-list', pathMatch: 'full' },
    { path: ' ', redirectTo: '/recipe-list', pathMatch: 'full' },
    { path: 'signin', component: LoginUserComponent },
    { path: 'recipe-list', component: RecipeListComponent, children: recipesRoutes },
    { path: 'new', component: NewRecipeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);