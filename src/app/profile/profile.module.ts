import { NgModule } from "@angular/core";
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module'

@NgModule({
    declarations: [
      ProfileInformationComponent
    ],
    imports: [
      CommonModule,
      ProfileRoutingModule
    ],
    providers: [

    ],
})
export class ProfileModule {

}
