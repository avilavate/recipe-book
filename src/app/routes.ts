import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from "app/recipe-list/recipe-list.component";
import { ModuleWithProviders } from "@angular/core";

import { RecipeDetailComponent } from "app/recipe-list/recipe-detail.component";
import { recipesRoutes } from "app/recipe-list/recipe-detail.router";
import { NewRecipeComponent } from "app/new-recipe/new-recipe.component";
import { LoginUserComponent } from './users/login-user.component';
import { AuthGuardService } from "app/shared/auth-guard.service";
import { SignupUserComponent } from "app/users/signup-user.component";
import { NotFoundComponent } from "app/not-found/not-found.component";

const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: ' ', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: LoginUserComponent },
    { path: 'signup', component: SignupUserComponent },
    { path: 'recipe-list', component: RecipeListComponent, children: recipesRoutes, canActivate: [AuthGuardService] },
    { path: 'new', component: NewRecipeComponent, canActivate: [AuthGuardService] },
    { path: '**', component: NotFoundComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);