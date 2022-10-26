// Core
import { FC, ReactElement, useEffect, useState } from 'react'

// Common
import { ColorColumProps } from './ColorColum.props'
import styles from './ColorColum.module.scss'
import generateRandomColor from '@/helpers/randomColor.help'
import textColor from '@/helpers/textColor.help'

// const ColorColum: FC<ColorColumProps> = ({ isUpdate, pos, colorHash }): ReactElement => {
//   const [color, setColor] = useState('#FFFFFF')
//   const [isLocked, setIsLocked] = useState(false)

//   const txtColor = textColor(color)

//   useEffect(() => {
//     if (!isLocked) {
//       setColor(generateRandomColor())
//     }
//     colorHash(color, pos)
//   }, [isUpdate])

//   const handleClick = (event: any) => {
//     event.preventDefault()
//     event.target.blur()

//     setIsLocked(prev => !prev)
//   }

//   const handleClickHexColor = async (hex: string) => {
//     console.log('hex')
//     console.log(await navigator.clipboard.writeText(hex))
//     // document.location.hash = hex
//   }

//   return (
//     <div className={styles.container} style={{ background: color }}>
//       <h2 style={{ color: txtColor }} onClick={() => handleClickHexColor(txtColor)}>
//         {color}
//       </h2>
//       <button onClick={event => handleClick(event)}>
//         {isLocked ? <img src="images/lock.svg" alt="замок закрыт" width="35px" /> : <img src="images/unlock.svg" alt="замок открыт" width="35px" />}
//       </button>
//     </div>
//   )
// }

// const ColorColum: FC<ColorColumProps> = ({ colorBackground, onclick }): ReactElement => {
const ColorColum: FC<ColorColumProps> = ({ setting, onclick }): ReactElement => {
  // const [isLocked, setIsLocked] = useState(false)

  return (
    <div className={styles.container} style={{ background: setting.background }}>
      {/* <h2 style={{ color: txtColor }} onClick={() => handleClickHexColor(txtColor)}> */}
      <h2>{setting.background}</h2>
      {/* <button onClick={event => onclick(event)}> */}
      <button onClick={() => onclick(setting.index)}>
        {/* fff */}
        {/* {isLocked ? <img src="images/lock.svg" alt="замок закрыт" width="35px" /> : <img src="images/unlock.svg" alt="замок открыт" width="35px" />} */}
        {setting.isFix ? <img src="images/lock.svg" alt="замок закрыт" width="35px" /> : <img src="images/unlock.svg" alt="замок открыт" width="35px" />}
      </button>
    </div>
  )
}

export default ColorColum
