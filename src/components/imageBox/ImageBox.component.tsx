import HeartIcon from '@components/ui/icons/heart/HeartIcon.component'
import StarIcon from '@components/ui/icons/star/StarIcon.component'
import { useSwipeAnimation } from '@hooks/useSwipeAnimation.hook'
import classNames from 'classnames'
import { FC, useState } from 'react'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useSwipeable } from 'react-swipeable'
import { IImageBox } from './ImageBox.interface'
import css from './ImageBox.module.scss'
import AuthorBar from './authorBar/AuthorBar.component'

const ImageBox: FC<IImageBox> = ({ ...props }) => {
  const { currentImageID, images, setCurrentImageID } = props
  const [swipeDirection, setSwipeDirection] = useState<'Right' | 'Left' | null>(null)
  const [showInfo, setShowInfo] = useState<boolean | null>(null)
  const [prevSwipe, setPrevSwipe] = useState<'Right' | 'Left' | null>(null)
  const { startPosition, setCurrentPosition, setStartPosition } = useSwipeAnimation(
    css.home_card_container
  )

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSwipeDirection('Left')
      setPrevSwipe('Left')
      setShowInfo(null)
      handleMouseUp()
      setTimeout(() => {
        setSwipeDirection(null)
        setCurrentImageID((prevImage: number) =>
          prevImage === images.length - 1 ? 0 : prevImage + 1
        )
      }, 200)
    },
    onSwipedRight: () => {
      setSwipeDirection('Right')
      setPrevSwipe('Right')
      setShowInfo(null)
      handleMouseUp()
      setTimeout(() => {
        setSwipeDirection(null)
        setCurrentImageID((prevImage: number) =>
          prevImage === 0 ? images.length - 1 : prevImage - 1
        )
      }, 200)
    },
    delta: 0,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  function handleMouseUp() {
    setStartPosition(undefined)
    setCurrentPosition(undefined)
  }
  return (
    <>
      <div
        id={css.home_card_container}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        onMouseOut={handleMouseUp}
        onTouchCancel={handleMouseUp}
        onMouseMove={e => startPosition && setCurrentPosition({ x: e.clientX, y: e.clientY })}
        onTouchMove={e =>
          startPosition && setCurrentPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY })
        }
        onMouseDown={e => showInfo || setStartPosition({ x: e.clientX, y: e.clientY })}
        onTouchStart={e =>
          showInfo || setStartPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY })
        }>
        <div
          className={classNames({
            [css.swipe_right]: swipeDirection == 'Right',
            [css.swipe_left]: swipeDirection == 'Left',
            [css.hide_image]: showInfo != null && showInfo,
            [css.show_image]: showInfo != null && !showInfo,
            [css.next_image_appearance]:
              showInfo == null && !swipeDirection && prevSwipe == 'Right',
            [css.prev_image_appearance]: showInfo == null && !swipeDirection && prevSwipe == 'Left',
          })}
          {...handlers}
          id={css.home_image_box_container}>
          <HiOutlineInformationCircle
            id={css.info_icon}
            onClick={() => startPosition || setShowInfo(true)}
          />
          <HeartIcon active={false} id={css.heart_icon} />
          <StarIcon active={false} />
          <AuthorBar {...images[currentImageID].author} />
        </div>
        <div
          className={classNames({
            [css.show_image]: showInfo != null && showInfo,
            [css.hide_image]: showInfo != null && !showInfo,
          })}
          id={css.home_image_info_container}>
          <IoClose onClick={() => setShowInfo(false)} />
          <p>{images[currentImageID].description ?? 'No description D:'}</p>
        </div>
      </div>
      <div id={css.groove}></div>
    </>
  )
}

export default ImageBox
