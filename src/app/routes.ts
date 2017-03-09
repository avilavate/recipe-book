import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from "app/recipe-list/recipe-list.component";
import { ModuleWithProviders } from "@angular/core";

const routes:Routes=[{
    path:'recipe-list', component:RecipeListComponent}
];

export const routing:ModuleWithProviders=RouterModule.forRoot(routes);