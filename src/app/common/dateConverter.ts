import { DatePipe } from '@angular/common';

/**
 * Remove the timestamp from a date.
 *
 * @param   {Date | undefined | null} [date]  The Date to convert.
 * @param {string} [format=yyyy-MM-dd] - The format to convert into.
 * @param {string} [locale=it-IT] - The locale to use in constructor.
 * @returns {(string|undefined)} The value converted or undefined if it fails.
 */
export function dateConverter(
  date: Date | undefined | null,
  format: string = 'yyyy-MM-dd',
  locale = 'it-IT'
): string | undefined {
  const datePipe = new DatePipe(locale);

  return (date ? datePipe.transform(date, format) : null) ?? undefined;
}
