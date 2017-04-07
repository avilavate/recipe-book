import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeRootComponent } from './recipe-root.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-list/recipe-detail.component';
import { RbDropdownDirective } from './users/rb-dropdown.directive';
import {RecipesService} from './shared/recipes.service';
import { routing } from './routes';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { LoginUserComponent } from './users/login-user.component';
import { StorageService } from "app/shared/storage-service";
import { AuthGuardService } from "app/shared/auth-guard.service";
import { HighlightLinkDirective } from './highlight-link.directive';
import { SignupUserComponent } from './users/signup-user.component';
import { EqualValidatorDirective } from './equal-validator.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { DisableAllDirective } from './shared/disable-all.directive';


@NgModule({
  declarations: [
    AppComponent,
    RecipeRootComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RbDropdownDirective,
    EditRecipeComponent,
    NewRecipeComponent,
    LoginUserComponent,
    HighlightLinkDirective,
    SignupUserComponent,
    EqualValidatorDirective,
    NotFoundComponent,
    DisableAllDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StorageService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
