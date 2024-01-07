import { FC, useState } from 'react'
import css from './ImageBox.module.scss'
import { useSwipeable } from 'react-swipeable'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import classNames from 'classnames'
import { IImageBox } from './ImageBox.interface'
import AuthorBar from './authorBar/AuthorBar.component'

const ImageBox: FC<IImageBox> = ({ ...props }) => {
  const { currentImageID, images, setCurrentImageID } = props
  const [swipeDirection, setSwipeDirection] = useState<'Right' | 'Left' | null>(null)
  const [showInfo, setShowInfo] = useState<boolean | null>(null)
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSwipeDirection('Left')
      setShowInfo(null)
      setTimeout(() => {
        setSwipeDirection(null)
        setCurrentImageID((prevImage: number) =>
          prevImage === images.length - 1 ? 0 : prevImage + 1
        )
      }, 400)
    },
    onSwipedRight: () => {
      setSwipeDirection('Right')
      setShowInfo(null)
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
    <div id={css.home_card_container}>
      <div
        className={classNames({
          [css.swipe_right]: swipeDirection == 'Right',
          [css.swipe_left]: swipeDirection == 'Left',
          [css.hide_image]: showInfo != null && showInfo,
          [css.show_image]: showInfo != null && !showInfo,
        })}
        {...handlers}
        id={css.home_image_box_container}>
        <HiOutlineInformationCircle onClick={() => setShowInfo(true)} />
        <AuthorBar {...images[currentImageID].author} />
      </div>
      <div
        className={classNames({
          [css.show_image]: showInfo != null && showInfo,
          [css.hide_image]: showInfo != null && !showInfo,
        })}
        id={css.home_image_info_container}>
        <p>{images[currentImageID].description ?? 'No description D:'}</p>
        <IoClose onClick={() => setShowInfo(false)} />
      </div>
    </div>
  )
}

export default ImageBox
