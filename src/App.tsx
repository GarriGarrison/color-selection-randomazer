// Core
import { FC, ReactElement, useState, useEffect } from 'react'

// Common
import ColorColum from './components/ColorColum'
import generateRandomColor from './helpers/randomColor.help'

const COLUMS_COUNT = 5

const App: FC = (): ReactElement => {
  const columsInit: ColorColum[] = []

  if (document.location.hash.length > 1) {
    const colors: string[] = document.location.hash
      .substring(1)
      .split('-')
      .map(color => '#' + color)
    for (let i = 0; i < COLUMS_COUNT; i++) {
      const color = colors[i]
      columsInit.push({ index: i, background: color, isFix: false })
    }
  } else {
    for (let i = 0; i < COLUMS_COUNT; i++) {
      const color = generateRandomColor()
      columsInit.push({ index: i, background: color, isFix: false })
    }
  }

  const [update, setUpdate] = useState(false)
  const [colums, setColums] = useState<ColorColum[]>(columsInit)
  const [_, setHashColor] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setUpdate(prev => !prev)
      }
    })
  }, [])

  useEffect(() => {
    /**
     * Обновление цвета колонок
     */
    if (update) {
      const columsUpdate: ColorColum[] = []
      for (let i = 0; i < COLUMS_COUNT; i++) {
        let color = '#FFFFFF'
        colums[i].isFix ? (color = colums[i].background) : (color = generateRandomColor())
        columsUpdate.push({ index: i, background: color, isFix: colums[i].isFix })
      }
      setColums(columsUpdate)

      /**
       * Сбор цветов колонок для Hash
       */
      let hashColorNew = ''
      for (let i = 0; i < COLUMS_COUNT; i++) {
        const hashColorFormated = columsUpdate[i].background.substring(1)
        hashColorNew += hashColorFormated + '-'
      }
      hashColorNew = hashColorNew.slice(0, -1)
      setHashColor(hashColorNew)

      document.location.hash = hashColorNew
    }
  }, [update])

  const handleClick = (event: any, index: number) => {
    /**
     * Обновление состояния фиксации цвета у колонки
     */
    event.target.blur()

    const statusUpdate = []

    for (let i = 0; i < COLUMS_COUNT; i++) {
      if (index === i) {
        statusUpdate.push({ ...colums[i], isFix: !colums[i].isFix })
      } else {
        statusUpdate.push({ ...colums[i] })
      }
    }

    setColums(statusUpdate)
  }

  const colorColums = () => {
    return colums.map((colum: ColorColum, i: number) => <ColorColum key={i} setting={colum} onclick={handleClick} />)
  }

  return <>{colorColums()}</>
}

export default App
