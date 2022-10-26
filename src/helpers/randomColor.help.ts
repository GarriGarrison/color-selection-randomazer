/**
 * Генерация случайного цвета
 */
const generateRandomColor = (): string => {
  // RGB
  // #FF0000 - красный
  // #00FF00 - зелёный
  // #0000FF - синий

  const hexCodes = '01234567890ABDEF'
  let color = ''

  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }

  return '#' + color
}

export default generateRandomColor
