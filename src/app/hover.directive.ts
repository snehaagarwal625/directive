
import { Directive, HostListener, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  defaultcolor: string = 'black'
  Highlightedcolor: string = 'red'

  constructor(private elm : ElementRef , private render:Renderer2) { }

  @HostBinding('style.color') color:string = this.defaultcolor;
  @HostListener('mouseenter') mouseover(event: Event) {
    this.color = this.Highlightedcolor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.color = this.defaultcolor;
  }

}
