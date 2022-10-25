import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColorConst: string = 'transparent';

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'lime');
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
    this.backgroundColorConst = 'blue';
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'transparent');
    this.backgroundColorConst = 'transparent';
  }

}
