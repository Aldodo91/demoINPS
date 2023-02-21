import { DatePipe } from '@angular/common';

export function dateConverter(
  date: Date | undefined | null,
  format: string = 'yyyy-MM-dd',
  locale = 'it-IT'
): string | undefined {
  const datePipe = new DatePipe(locale);

  return (date ? datePipe.transform(date, format) : null) ?? undefined;
}
