import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { AppMaterialModule } from '../app-material-module';
import { SearchComponent } from './search/search.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { CustomComponent } from './custom/custom.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    AccessoriesComponent,
    EquipmentComponent,
    CustomComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    HomeComponent,
    SearchComponent,
  ]
})
export class PagesModule { }
