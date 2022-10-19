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

  serverName:any = 'TestServer';
  serverCreationStatus = 'not created';
  username: any;
  serverCreated = false;

  serverStatus: any = 'offLine';
  serverStatusTwo = false;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000)
  }

  inputInfoMethod(event: any): void {
    this.inputInfo = <HTMLInputElement>event.target.value;
    this.serverName = this.inputInfo;
  }

  onCreateServer(event: any): void {
    this.serverCreationStatus = 'Server was created successfully ' + this.serverName;
  }

  toEmtyString():void {
    this.username = '';
  }

  serverCreate():void {
    this.serverCreated = !this.serverCreated;
  }

  changeColor():void {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  changeColorTwo():void {
    this.serverStatusTwo = !this.serverStatusTwo;
  }

  getColorTwo(): string {
    return this.serverStatusTwo === true ? 'green' : 'red';
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
