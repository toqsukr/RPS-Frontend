import { FC } from 'react'
import css from './ImageBox.module.scss'
import { IImage } from './ImageBox.interface'

const ImageBox: FC<IImage> = ({ ...props }) => {
  return <div id={css.home_image_box_container}></div>
}

export default ImageBox
