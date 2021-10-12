import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
<<<<<<< Updated upstream
export class HoverStyleDirective implements OnInit {
  @Input() tagIndex?: string
=======
export class HoverStyleDirective implements OnInit{
  @Input() tagIndex?: string;
>>>>>>> Stashed changes

  constructor(private elm: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.tagIndex == undefined) {
<<<<<<< Updated upstream
      this.addUnderline();
=======
      this.underlineText();
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  addUnderline() {
    this.elm.nativeElement.style.textDecoration = "underline";
  }

  removeUnderline() {
=======
  underlineText(): void {
    this.elm.nativeElement.style.textDecoration = "underline";
  }

  removeUnderline(): void {
>>>>>>> Stashed changes
    this.elm.nativeElement.style.textDecoration = null;
  }

  addBoldToTag() {
    this.elm.nativeElement.style.fontWeight = "bold";
  }

  removeBoldFromTag() {
    this.elm.nativeElement.style.fontWeight = "normal";
  }

<<<<<<< Updated upstream




=======
>>>>>>> Stashed changes
}
