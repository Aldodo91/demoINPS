/**
 * Questo è un validatore Custom per espressioni regolari
 */
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function regexValidator(name: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valoreProibito = name.test(control.value);

    return valoreProibito
      ? null
      : {
          errore: {
            value: control.value,
            descrizione: 'il valore non e ammesso',
          },
        };
  };
}
