import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Piotr B';
  public color = 'red';

  get styles() {
    return {
      'background': this.color,
      'color': 'black'
    }
  }
}