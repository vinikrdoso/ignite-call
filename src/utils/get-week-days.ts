export function getWeekDays({ locale = 'pt-BR', short = false }) {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'long' })

  const now = new Date()
  const currentDayOfWeek = now.getDay()

  return Array.from(Array(7).keys())
    .map((day) => {
      const date = new Date().setDate(now.getDate() - currentDayOfWeek + day)
      return formatter.format(date)
    })
    .map((weekDay) => {
      if (short) {
        return weekDay.substring(0, 3).toUpperCase()
      }
      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}
