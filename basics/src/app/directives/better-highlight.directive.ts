import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

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
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'lime');
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'transparent');
  }

}
