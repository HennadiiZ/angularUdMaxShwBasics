import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated // by default,
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom // Uses ShadowDom technology
})
export class ServerElementComponent implements OnInit {
  // @Input() element!: { type: string; name: string, content: string};
  @Input('srvrElement') element!: { type: string; name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
