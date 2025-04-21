import { Component } from '@angular/core';
import { images } from '../../constants/images';


@Component({
  selector: 'app-assets',
  standalone: false,
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.scss'
})
export class AssetsComponent {
  imgs = images;

  data = [
    {
      title: 'Portable Device',
      content: ['Laptop Tracking', 'Location monitoring'],
      route: 'employee-page'
    },
    {
      title: 'Furniture tracking',
      content: ['Office Equipment', 'Asset Management'],
      route: 'employee-details'
    },
    {
      title: 'Administration',
      content: ['Configuration', 'User Management'],
      route: 'admin'
    }
  ];
  
 }
