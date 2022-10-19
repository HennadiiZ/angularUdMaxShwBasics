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
