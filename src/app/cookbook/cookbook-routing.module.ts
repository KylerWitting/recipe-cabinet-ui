import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookbookComponent } from './cookbook.component';

export const routes: Routes = [
  {
    path: '',
    component: CookbookComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookbookRoutingModule {
 
}
