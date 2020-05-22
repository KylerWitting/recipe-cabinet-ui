import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeRecipesComponent } from './home/home-recipes/home-recipes.component';
import { HomeRecipesResolver } from './home/home-recipes/home-recipes-resolver.service';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ReferencesComponent } from './references/references.component';

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
    path: 'cookbook',
    loadChildren: () =>
      import('./cookbook/cookbook.module').then((it) => it.CookbookModule),
  },
  {
    path: 'references',
    component: ReferencesComponent,
  },
  {
    path: '',
    redirectTo: '/home',
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
