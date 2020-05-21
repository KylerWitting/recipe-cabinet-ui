import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { HomeRecipesComponent } from './home/home-recipes/home-recipes.component';
import { HomeRecipesResolver } from './home/home-recipes/home-recipes-resolver.service';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeRecipesComponent,
    resolve: { homeRecipes: HomeRecipesResolver },
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailsComponent,
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((it) => it.ProfileModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
