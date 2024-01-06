import { FC, useState } from 'react'
import css from './ImageBox.module.scss'
import { IImageBox } from './ImageBox.interface'
import AuthorBar from './authorBar/AuthorBar.component'
import { useSwipeable } from 'react-swipeable'
import classNames from 'classnames'

const ImageBox: FC<IImageBox> = ({ ...props }) => {
  const { currentImageID, images, setCurrentImageID } = props
  const [swipeDirection, setSwipeDirection] = useState<'Right' | 'Left' | null>(null)
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSwipeDirection('Left')
      setTimeout(() => {
        setSwipeDirection(null)
        setCurrentImageID((prevImage: number) =>
          prevImage === images.length - 1 ? 0 : prevImage + 1
        )
      }, 400)
    },
    onSwipedRight: () => {
      setSwipeDirection('Right')
      setTimeout(() => {
        setSwipeDirection(null)
        setCurrentImageID((prevImage: number) =>
          prevImage === 0 ? images.length - 1 : prevImage - 1
        )
      }, 400)
    },
    delta: 100,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })
  return (
    <div
      className={classNames({
        [css.swipe_right]: swipeDirection == 'Right',
        [css.swipe_left]: swipeDirection == 'Left',
      })}
      {...handlers}
      id={css.home_image_box_container}>
      <AuthorBar {...images[currentImageID].author} />
    </div>
  )
}

export default ImageBox
