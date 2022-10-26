// Core
import { FC, ReactElement } from 'react'

// Common
import { ColorColumProps } from './ColorColum.props'
import styles from './ColorColum.module.scss'
import textColor from '@/helpers/textColor.help'

const ColorColum: FC<ColorColumProps> = ({ setting, onclick }): ReactElement => {
  const txtColor = textColor(setting.background)

  return (
    <div className={styles.container} style={{ background: setting.background }}>
      <h2 style={{ color: txtColor }}>{setting.background}</h2>
      <button onClick={event => onclick(event, setting.index)}>
        {setting.isFix ? <img src="images/lock.svg" alt="замок закрыт" width="35px" /> : <img src="images/unlock.svg" alt="замок открыт" width="35px" />}
      </button>
    </div>
  )
}

export default ColorColum
