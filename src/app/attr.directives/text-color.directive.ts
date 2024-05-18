import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true, // Állítsuk be standalone-ra
})
export class TextColorDirective {
  @Input() appTextColor = ''; // Az alapértelmezett szín

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.changeTextColor(this.appTextColor || 'blue');
  }

  private changeTextColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
