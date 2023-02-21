import { DatePipe } from '@angular/common';

export function converter(
  date: Date | undefined | null,
  format: string = 'yyyy-MM-dd',
  locale = 'it-IT'
) {
  let a = new DatePipe(locale);
  let convertedValue = date ? a.transform(date, format) : undefined;

  return convertedValue ?? undefined;
}
