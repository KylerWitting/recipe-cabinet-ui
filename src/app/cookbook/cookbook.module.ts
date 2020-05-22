import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookbookComponent } from './cookbook.component';
import { CookbookRoutingModule } from './cookbook-routing.module';

@NgModule({
  declarations: [
    CookbookComponent
  ],
  imports: [
    CommonModule,
    CookbookRoutingModule
  ]
})
export class CookbookModule { }
