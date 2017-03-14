import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from "app/recipe-list/recipe-list.component";
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    { path: '', redirectTo: '/recipe-list', pathMatch: 'full' },
    { path: ' ', redirectTo: '/recipe-list', pathMatch: 'full' },
    { path: 'recipe-list', component: RecipeListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);