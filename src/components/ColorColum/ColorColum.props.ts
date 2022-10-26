import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ColorColumProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: never
  setting: ColorColum
  onclick: (index: number) => void
}
