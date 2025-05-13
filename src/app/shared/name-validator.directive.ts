import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[checkName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NameValidatorDirective,
    multi: true
  }]
})
export class NameValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): { [key: string]: any } | null {
    const checkName: string = control.value;
    return checkName.startsWith('Angular') === false ? { "startName": true } : null;
  }
}
