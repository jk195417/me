import type { Resume } from './types'

// Each data/$lang.yml becomes one version of the resume
const files = import.meta.glob<Resume>('../data/*.yml', { eager: true, import: 'default' })

export const resumes: Record<string, Resume> = Object.fromEntries(
  Object.entries(files).map(([path, resume]) => [path.match(/([^/]+)\.yml$/)![1], resume]),
)

export const languages = Object.keys(resumes)
