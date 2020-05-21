import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileInformationComponent } from './profile-information/profile-information.component';

export const profileRoutes: Routes = [
  // {
  //   path: 'information',
  //   redirectTo: 'information/',
  //   pathMatch: 'full'
  // },
  {
    path: 'information',
    component: ProfileInformationComponent,
  },
  {
    path: '',
    redirectTo: 'information',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
