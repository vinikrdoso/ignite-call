// export function getWeekDays() {
//   const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

//   return Array.from(Array(7).keys())
//     .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
//     .map((weekDay) => {
//       return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
//     })
// }

export function getWeekDays(locale = 'pt-BR') {
  // Opção de usar outras localidades
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'long' })

  const now = new Date()
  const currentDayOfWeek = now.getDay()

  return Array.from(Array(7).keys())
    .map((day) => {
      const date = new Date().setDate(now.getDate() - currentDayOfWeek + day)
      return formatter.format(date)
    })
    .map((weekDay) => {
      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}
