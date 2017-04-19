import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { routing } from "app/routes";
import { RecipeRootComponent } from "app/recipe-root.component";
import { RbDropdownDirective } from "app/users/rb-dropdown.directive";
import { LoginUserComponent } from "app/users/login-user.component";
import { HighlightLinkDirective, EqualValidatorDirective } from "app/shared";
import { SignupUserComponent } from "app/users/signup-user.component";
import { NotFoundComponent } from "app/not-found/not-found.component";
import { DisableAllDirective } from "app/shared/disable-all.directive";
import { HomeComponent } from "app/home/home.component";
import { ToastModule } from "ng2-toastr/ng2-toastr";
import { AppComponent } from "app/app.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    routing
  ],
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
    HomeComponent],
    exports:[RecipeRootComponent, AppComponent]
})
export class CoreModule { }
