import { IAuthor } from './authorBar/AuthorBar.interface'

export interface IImage {
  id: string
  title: string
  src: string
  author: IAuthor
  description?: string
}
