import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective implements OnInit{
  @Input() tagIndex?: string;

  constructor(private elm: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.tagIndex == undefined) {
      this.addUnderline();
    } else {
      this.addBoldToTag();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tagIndex == undefined) {
      this.removeUnderline();
    } else {
      this.removeBoldFromTag();
    }
  }

  addUnderline() {
    this.elm.nativeElement.style.textDecoration = "underline";
  }

  removeUnderline(): void {
    this.elm.nativeElement.style.textDecoration = null;
  }

  addBoldToTag() {
    this.elm.nativeElement.style.fontWeight = "bold";
  }

  removeBoldFromTag() {
    this.elm.nativeElement.style.fontWeight = "normal";
  }
}
