import { DetailedHTMLProps, HTMLAttributes, MouseEvent } from 'react'

export interface ColorColumProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: never
  setting: ColorColum
  onclick: (event: MouseEvent, index: number) => void
}
