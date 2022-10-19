import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})

export class ServerComponent implements OnInit {

  name: string = 'Igor';
  id: number = 4;

  allowNewServer = false;
  inputInfo!: HTMLInputElement;
  inputInfoTwo!: HTMLInputElement;

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000)
  }

  inputInfoMethod(event: any): void {
    this.inputInfo = <HTMLInputElement>event.target.value;
  }

}



















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-server',
//   templateUrl: './server.component.html',
//   styleUrls: ['./server.component.scss']
// })
// export class ServerComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
