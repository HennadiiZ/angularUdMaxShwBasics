import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  number: number = 0;
  @Output() intervalFired = new EventEmitter<number>();
  timeinterval: any;

  constructor() {}

  ngOnInit(): void {}

  startTheGame() {
    return this.timeinterval = setInterval(() => {
      this.intervalFired.emit(this.number++);
    }, 1000);
  }

  stopTheGame():void {
    return clearInterval(this.timeinterval);
  }

}
