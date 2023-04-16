import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupensRoutingModule } from './coupens-routing.module';

import { CoupensComponent } from './coupens/coupens.component';
import { CoupenListComponent } from './coupens-list/coupen-list/coupen-list.component';



@NgModule({
  declarations: [
    CoupenListComponent
  ],
  imports: [
    CommonModule,
    CoupensRoutingModule
  ]
})
export class CoupensModule { }
