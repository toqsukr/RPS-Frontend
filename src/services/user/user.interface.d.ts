import { IImage } from '@components/imageBox/ImageBox.interface'

export interface IImageRequest {
  chat_id: string
  photo: string
  caption: string
}
