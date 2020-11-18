import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'game-control-assignment';

  numbers: Array<number> = [];

  onNumberEmitted(event: number) {
    console.log('received: ' + event);
    this.numbers.push(event);
  }
}
