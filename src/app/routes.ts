import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from "app/recipe-list/recipe-list.component";
import { ModuleWithProviders } from "@angular/core";
import { RecipeDetailComponent } from "app/recipe-list/recipe-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/recipe-list', pathMatch: 'full' },
    { path: ' ', redirectTo: '/recipe-list', pathMatch: 'full' },
    {
        path: 'recipe-list', component: RecipeListComponent,
        children: [
            { path: 'detail/:name', component: RecipeDetailComponent }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);