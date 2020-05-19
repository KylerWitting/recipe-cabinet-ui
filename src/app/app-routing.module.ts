import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';


const routes: Routes = [
  {
    path: 'home',
    component: ListRecipesComponent,
  },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then((it) => it.ProfileModule),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
