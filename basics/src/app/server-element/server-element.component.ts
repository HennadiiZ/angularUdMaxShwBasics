import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated // by default,
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom // Uses ShadowDom technology
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {
  // @Input() element!: { type: string; name: string, content: string};
  @Input('srvrElement') element!: { type: string; name: string, content: string};
  @Input() name!: string;
  @ViewChild('heading') heading!: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges", changes); // ngOnChanges {element: SimpleChange} - result of @Input
  }

  ngOnInit(): void {
    // console.log("this.heading", this.heading.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log("this.heading", this.heading.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  //
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("");
  }

}
