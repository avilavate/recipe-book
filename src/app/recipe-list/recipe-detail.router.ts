import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail.component';

const recipesRoutes: Routes = [
    { path: 'detail/:name', component: RecipeDetailComponent }
];

export const childRouting = RouterModule.forChild(recipesRoutes);