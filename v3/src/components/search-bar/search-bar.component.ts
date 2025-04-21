import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  SERIAL_NUMBER: string = '';

  performSearch() {
    // this.resetSearch()
    console.log('Search button clicked');
  }


  resetSearch() {
    console.log('reset');
    }

}
