import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { CustomComponent } from './pages/custom/custom.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'search', component: SearchComponent, title: 'Search Carts' },
  { path: 'accessories', component: AccessoriesComponent, title: 'Accessories' },
  { path: 'equipment', component: EquipmentComponent, title: 'Equipment' },
  { path: 'custom-orders', component: CustomComponent, title: 'Custom Orders' },
  { path: 'gallery', component: GalleryComponent, title: 'Gallery' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
