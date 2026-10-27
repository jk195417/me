import dayjs from 'dayjs'
import type { DateValue } from './types'

/** Formats a date as YYYY/MM; text such as "Present" or a bare year is shown as it is. */
export function formatDate(value: DateValue): string {
  // A bare year is parsed by YAML as a number, which dayjs would treat as a timestamp
  if (typeof value === 'number') return String(value)
  // YAML dates are UTC midnight, so read them in UTC to keep the month in every time zone
  if (value instanceof Date) {
    return `${value.getUTCFullYear()}/${String(value.getUTCMonth() + 1).padStart(2, '0')}`
  }
  const date = dayjs(value)
  return date.isValid() ? date.format('YYYY/MM') : value.toString()
}

/** Splits a multi-line YAML text into paragraphs. */
export function sentences(text?: string | null): string[] {
  return (text ?? '').split('\n').filter((line) => line.trim() !== '')
}
