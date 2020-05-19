import { NgModule } from "@angular/core";
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './profile-routing.module'

@NgModule({
    declarations: [
      ProfileInformationComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(profileRoutes)
    ],
    providers: [

    ],
})
export class ProfileModule {

}
