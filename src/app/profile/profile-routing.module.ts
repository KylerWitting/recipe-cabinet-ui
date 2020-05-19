import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileInformationComponent } from './profile-information/profile-information.component';

export const profileRoutes: Routes = [
  {
    path: 'information',
    component: ProfileInformationComponent,
  },
  {
    path: '',
    redirectTo: 'information',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(profileRoutes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
