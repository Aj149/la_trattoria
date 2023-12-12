import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target;
    const trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 0) {
      input.value = trimmed.match(new RegExp('.{1,4}', 'g')).join(' ');
    } else {
      input.value = '';
    }
  }
}
