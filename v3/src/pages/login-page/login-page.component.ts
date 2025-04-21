import { Component } from '@angular/core';
import {images} from '../../constants/images';


@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
 pic=images;
}
