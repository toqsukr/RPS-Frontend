import { SetStateAction } from 'react'
import { IAuthor } from './authorBar/AuthorBar.interface'

export interface IImage {
  id: string
  title: string
  src: string
  author: IAuthor
  description?: string
}

export interface IImageBox {
  images: IImage[]
  currentImageID: number
  setCurrentImageID: Dispatch<SetStateAction<number>>
}
