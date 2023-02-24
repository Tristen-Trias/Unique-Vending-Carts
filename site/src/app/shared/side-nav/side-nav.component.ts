import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { List } from '../models/list';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  list = [
    new List('Home', 'fa-solid fa-house', '/home'),
    new List('Search Carts', 'fa-solid fa-magnifying-glass', '/search'),
    new List('Accessories', 'fa-solid fa-plus', '/accessories'),
    new List('Equipment', 'fa-solid fa-tools', '/equipment'),
    new List('Custom Orders', 'fa-solid fa-pen', '/custom-orders'),
    new List('Gallery', 'fa-solid fa-images', '/gallery'),
    new List('About', 'fa-regular fa-circle-question', '/about'),
    new List('Contact', 'fa-solid fa-envelope', '/contact')
  ]

  array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]
  constructor() { }
}
