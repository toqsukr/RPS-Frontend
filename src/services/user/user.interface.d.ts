import { IImage } from '@components/imageBox/ImageBox.interface'

export interface IImageRequest {
  chat_id: number
  photo: string
  caption: string
}
