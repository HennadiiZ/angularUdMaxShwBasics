import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  serverElements: any = [];
  showNumbers: number = 0;


  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;

  value = 10;

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

  onChangeFirst() {
    this.serverElements[0].name = "changed!";
  }

  number(number:number) {
    this.showNumbers = number;

    if (number % 2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }
}
