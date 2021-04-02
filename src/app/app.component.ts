import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';
  feature: string = "recipe"
  handlePageChange(feature: string) {
    this.feature = feature;
  }
}
