// Core
import chroma from 'chroma-js'

const textColor = (color: string): 'black' | 'white' => {
  const luminance = chroma(color).luminance()

  return luminance > 0.5 ? 'black' : 'white'
}

export default textColor
