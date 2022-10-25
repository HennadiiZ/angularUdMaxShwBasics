import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'red';

  // @HostBinding('style.backgroundColor') backgroundColorConst: string = 'transparent';
  // @HostBinding('style.backgroundColor') backgroundColorConst: string = this.defaultColor;
  @HostBinding('style.backgroundColor') backgroundColorConst!: string;


  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'lime');
    this.backgroundColorConst = this.defaultColor;
  }

  // @HostListener('mouseenter') mouseover() {}

  // @HostListener('mouseenter') yy(event: Event) {
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'lime');
  // }

  // @HostListener('mouseleave') yyy(event: Event) {
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'transparent');
  // }

  @HostListener('mouseenter') mouseenter(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'lime');
    // this.backgroundColorConst = 'blue';
    this.backgroundColorConst = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'transparent');
    // this.backgroundColorConst = 'transparent';
    this.backgroundColorConst = this.defaultColor;
  }

}
