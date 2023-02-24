import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';

import { AppMaterialModule } from '../app-material-module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule,
  ],
  exports: [
    SideNavComponent,
  ]
})
export class SharedModule { }
