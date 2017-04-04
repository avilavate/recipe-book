import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from "app/recipe-list/recipe-list.component";
import { ModuleWithProviders } from "@angular/core";

import { RecipeDetailComponent } from "app/recipe-list/recipe-detail.component";
import { recipesRoutes } from "app/recipe-list/recipe-detail.router";
import { NewRecipeComponent } from "app/new-recipe/new-recipe.component";
import { LoginUserComponent } from './users/login-user.component';
import { AuthGuardService } from "app/shared/auth-guard.service";

const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: ' ', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: LoginUserComponent },
    { path: 'recipe-list', component: RecipeListComponent, children: recipesRoutes, canActivate: [AuthGuardService] },
    { path: 'new', component: NewRecipeComponent, canActivate: [AuthGuardService] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);