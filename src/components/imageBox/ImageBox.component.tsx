import { FC } from 'react'
import css from './ImageBox.module.scss'
import { IImage } from './ImageBox.interface'
import AuthorBar from './authorBar/AuthorBar.component'

const ImageBox: FC<IImage> = ({ ...props }) => {
  return (
    <div id={css.home_image_box_container}>
      <AuthorBar {...props.author} />
    </div>
  )
}

export default ImageBox
