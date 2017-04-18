import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { LoginUserComponent } from './users/login-user.component';
import { AuthGuardService } from "app/shared/auth-guard.service";
import { SignupUserComponent } from "app/users/signup-user.component";
import { NotFoundComponent } from "app/not-found/not-found.component";

const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: ' ', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: LoginUserComponent },
    { path: 'signup', component: SignupUserComponent },
    { path: '**', component: NotFoundComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);