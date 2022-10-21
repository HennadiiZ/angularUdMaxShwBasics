import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  newServerName = 'Any name';
  newServerContent = 'name';
  @Output() serverElements = new EventEmitter();

  // @Output() serverCreated = new EventEmitter();
  @Output('srvrCreated') serverCreated = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });

    this.serverElements.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });

    this.serverCreated.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.serverElements.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });

    this.serverCreated.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
