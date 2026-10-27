// Shape of data/$lang.yml. Field names match the YAML files, which people edit when they fork.

// YAML turns a full date such as 2017-09-01 into a Date; partial ones such as 2019-11 stay strings.
export type DateValue = string | number | Date

export interface Website {
  name: string
  src: string
  fa_icon: string
}

export interface Chapter<T> {
  title: string
  content: T
}

export interface Skills {
  description: string
  list: { name: string; rate: string }[]
}

export interface Education {
  school: string
  department?: string | null
  degree: string
  from?: DateValue | null
  to?: DateValue | null
  badge?: string | null
  gpa?: string | null
  description?: string | null
}

export interface Experience {
  type: string
  title: string
  subtitle?: string | null
  tags?: string[] | null
  link?: string | null
  image?: string | null
  from?: DateValue | null
  to?: DateValue | null
  description?: string | null
}

export interface Chapters {
  introduction: Chapter<string>
  skills: Chapter<Skills>
  education: Chapter<Education[]>
  experience: Chapter<Experience[]>
}

export type ChapterKey = keyof Chapters

export interface Resume {
  info: { name: string; email: string }
  websites: Website[]
  chapters: Chapters
}
