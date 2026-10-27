import { describe, expect, it } from 'vitest'
import { formatDate, sentences } from './format'

describe('formatDate', () => {
  it('formats a year-month string', () => {
    expect(formatDate('2019-11')).toBe('2019/11')
  })

  it('formats a YAML date in UTC', () => {
    expect(formatDate(new Date(Date.UTC(2017, 8, 1)))).toBe('2017/09')
  })

  it('keeps text such as "Present" as it is', () => {
    expect(formatDate('Present')).toBe('Present')
    expect(formatDate('至今')).toBe('至今')
  })

  it('keeps a bare year instead of treating it as a timestamp', () => {
    expect(formatDate(2019)).toBe('2019')
  })
})

describe('sentences', () => {
  it('splits lines and drops empty ones', () => {
    expect(sentences('Hi,\nI am Aaron.\n')).toEqual(['Hi,', 'I am Aaron.'])
  })

  it('handles a missing text', () => {
    expect(sentences(null)).toEqual([])
  })
})
