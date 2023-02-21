import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function mioValidatore(name: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valoreProibito = name.test(control.value);
    return valoreProibito
      ? null
      : {
          email: {
            value: control.value,
            descrizione: 'il valore non e ammesso',
          },
        };
  };
}
