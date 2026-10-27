import dayjs from 'dayjs'

export default {
  props: ['title', 'content', 'print_mode'],
  methods: {
    // Non-date values such as "Present" are shown as they are
    date_formater: date => dayjs(date).isValid() ? dayjs(date).format('YYYY/MM') : date,
    sentences: paragraphs => paragraphs.split('\n')
  }
}
