import { Component } from '@angular/core';
import { images } from '../../constants/images';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
 imgs= images;
}
