import { describe, expect, it } from 'vitest'
import { resumes } from './resumes'

const rawFiles = import.meta.glob<string>('../data/*.yml', { eager: true, query: '?raw', import: 'default' })

describe.each(Object.entries(rawFiles))('%s', (_path, raw) => {
  // YAML silently rolls an impossible date such as 2017-06-31 over to the next month
  it('only contains real calendar dates', () => {
    for (const [text, y, m, d] of raw.matchAll(/\b(\d{4})-(\d{2})-(\d{2})\b/g)) {
      const date = new Date(Date.UTC(+y, +m - 1, +d))
      expect(date.toISOString().slice(0, 10), text).toBe(text)
    }
  })
})

describe.each(Object.entries(resumes))('resume %s', (_lang, resume) => {
  it('has every chapter', () => {
    expect(Object.keys(resume.chapters).sort()).toEqual(['education', 'experience', 'introduction', 'skills'])
  })

  it('has a title and some content in every chapter', () => {
    for (const chapter of Object.values(resume.chapters)) {
      expect(chapter.title).toBeTruthy()
      expect(chapter.content).toBeTruthy()
    }
  })
})
