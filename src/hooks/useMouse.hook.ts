import { useEffect, useState } from 'react'
import css from '@components/imageBox/ImageBox.module.scss'

interface IPosition {
  x: number
  y: number
}

export const useMouse = () => {
  const [startPosition, setStartPosition] = useState<IPosition>()
  const [currentPosition, setCurrentPosition] = useState<IPosition>()
  useEffect(() => {
    currentPosition?.x &&
      startPosition?.x &&
      currentPosition?.y &&
      startPosition?.y &&
      document
        .getElementById(css.home_card_container)
        ?.style.setProperty(
          'transform',
          `translate(${currentPosition.x - startPosition.x}px, ${
            currentPosition.y - startPosition.y
          }px`
        )

    if (!currentPosition) {
      setTimeout(
        () =>
          document
            .getElementById(css.home_card_container)
            ?.style.setProperty('transform', `translate(0, 0)`),
        300
      )
      return
    }
  }, [currentPosition])
  return { startPosition, setStartPosition, currentPosition, setCurrentPosition }
}
