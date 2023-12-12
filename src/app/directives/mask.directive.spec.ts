import { MaskDirective } from './mask.directive';
import { ElementRef } from '@angular/core';

describe('MaskDirective', () => {
  it('should create an instance', () => {

    const elementRef = {} as ElementRef<any>;


    const directive = new MaskDirective(elementRef);


    expect(directive).toBeTruthy();
  });
});
