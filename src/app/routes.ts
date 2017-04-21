import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { LoginUserComponent } from './users/login-user.component';
import { AuthGuardService } from "app/shared/auth-guard.service";
import { SignupUserComponent } from "app/users/signup-user.component";
import { NotFoundComponent } from "app/not-found/not-found.component";
import { HomeComponent } from "app/home/home.component";

const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: ' ', redirectTo: '/signin', pathMatch: 'full' },
    //    { path: '**', component: NotFoundComponent },
    { path: 'signin', component: LoginUserComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'signup', component: SignupUserComponent },
    { path: 'recipe-list', loadChildren: 'app/recipe-list/recipes.module#RecipesModule' }
];

//Note Enable this if preloading is required.

//export const routing: ModuleWithProviders = RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules });
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);