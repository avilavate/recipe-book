import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RbDropdownDirective } from './users/rb-dropdown.directive';
import { RecipesService } from './shared/recipes.service';
import { routing } from './routes';
import { LoginUserComponent } from './users/login-user.component';
import { StorageService } from "app/shared/storage-service";
import { AuthGuardService } from "app/shared/auth-guard.service";
import { HighlightLinkDirective } from './highlight-link.directive';
import { SignupUserComponent } from './users/signup-user.component';
import { EqualValidatorDirective } from './equal-validator.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { DisableAllDirective } from './shared/disable-all.directive';
import { RecipesModule } from "app/recipes.module";
import { RecipeRootComponent } from "app/recipe-root.component";


@NgModule({
  declarations: [
    AppComponent,
    RecipeRootComponent,
    RbDropdownDirective,
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
    routing,
    RecipesModule
  ],
  providers: [StorageService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
