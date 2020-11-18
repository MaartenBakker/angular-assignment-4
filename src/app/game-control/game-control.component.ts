import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() numberEmitter = new EventEmitter<number>();

  numberCounter = 0;
  emitterInterval: any;

  constructor() {}

  ngOnInit(): void {}

  onClickStartButton() {
    this.emitterInterval = setInterval(() => {
      console.log(this.numberCounter);

      this.numberEmitter.emit(this.numberCounter++);
    }, 1000);
  }

  onClickStopButton() {
    clearInterval(this.emitterInterval);
  }
}
