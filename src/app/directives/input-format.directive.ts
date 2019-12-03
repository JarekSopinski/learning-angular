import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  /*
  We can use directive's selector as an input to be able
  to pass it values in the template: [appInputFormat]="'uppercase'"
  */
  @Input('appInputFormat') format;

  /*
  ElementRef is a service defined in Angular that gives us access
  to the DOM object.
  */
  constructor(private el: ElementRef) { }

  /*
  HostListener is a decorator function that allows us to subscribe
  to the events raised from the DOM element that hosts this directive.
  */

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    this.format === 'lowercase' ?
      this.el.nativeElement.value = value.toLowerCase()
      :
      this.el.nativeElement.value = value.toUpperCase();
  }

}