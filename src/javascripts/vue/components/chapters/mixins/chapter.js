import dayjs from 'dayjs'

export default {
  props: ['title', 'content', 'show_chapters'],
  methods: {
    date_formater: date => dayjs(date).format('YYYY/MM'),
    sentences: paragraphs => paragraphs.split('\n')
  }
}
