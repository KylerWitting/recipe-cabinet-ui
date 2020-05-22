import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeThumbnailComponent } from './recipe/recipe-thumbnail/recipe-thumbnail.component';
import { HomeRecipesComponent } from './home/home-recipes/home-recipes.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ReferencesComponent } from './references/references.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeListComponent,
    RecipeThumbnailComponent,
    HomeRecipesComponent,
    RecipeDetailsComponent,
    ReferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
