import { FC } from 'react'
import css from './ImageBox.module.scss'
import { IImageBox } from './ImageBox.interface'
import AuthorBar from './authorBar/AuthorBar.component'
import { useSwipeable } from 'react-swipeable'

const ImageBox: FC<IImageBox> = ({ ...props }) => {
  const { currentImageID, images, setCurrentImageID } = props
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentImageID((prevImage: number) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      )
    },
    onSwipedRight: () => {
      setCurrentImageID((prevImage: number) =>
        prevImage === 0 ? images.length - 1 : prevImage - 1
      )
    },
    delta: 100,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })
  return (
    <div {...handlers} id={css.home_image_box_container}>
      <AuthorBar {...images[currentImageID].author} />
    </div>
  )
}

export default ImageBox
