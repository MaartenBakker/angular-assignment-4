import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() secondEmitter: EventEmitter<number>;

  secondCounter: number;
  emitterInterval: any;

  constructor() {
    this.secondEmitter = new EventEmitter();
    this.secondCounter = 0;
  }

  ngOnInit(): void {}

  onClickStartButton() {
    this.emitterInterval = setInterval(() => {
      console.log(this.secondCounter);

      this.secondEmitter.emit(this.secondCounter++);
    }, 1000);
  }

  onClickStopButton() {
    clearInterval(this.emitterInterval);
  }
}
