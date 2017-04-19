import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";

import { RecipesService } from './shared/recipes.service';
import { StorageService } from "app/shared/storage-service";
import { StorageBlobService } from "app/shared/storage-blob.service";
import { AppComponent } from "app/app.component";
import { AuthGuardService } from "app/shared/auth-guard.service";
import { CoreModule } from "app/core.module";
import { routing } from "app/routes";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule
  ],
  providers: [StorageService, AuthGuardService, StorageBlobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
