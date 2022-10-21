import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  serverElements: any = [];
  constructor() {
    console.log(this.serverElements);
  }
  // newServerName = '';
  // newServerContent = '';

  // onAddServer() {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

  // onAddBlueprint() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

  serverElementsMethod(event: any): void {
    this.serverElements.push(event);
    console.log(this.serverElements);
    console.log(event);
  }

  onServerAdded(serverData: { serverName: string; serverContent: string }): void {
    this.serverElements.push(serverData);
  }
}
