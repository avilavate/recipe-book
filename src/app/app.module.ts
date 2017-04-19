import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { RecipeRootComponent } from "app/recipe-root.component";
import { ToastModule } from '../../node_modules/ng2-toastr/ng2-toastr';
import { StorageBlobService } from "app/shared/storage-blob.service";
import { HomeComponent } from "app/home/home.component";


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
    DisableAllDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
   // RecipesModule,
    ToastModule.forRoot()
  ],
  providers: [StorageService, AuthGuardService, StorageBlobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
