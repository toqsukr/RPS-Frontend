import { useEffect, useState } from 'react'

interface IPosition {
  x: number
  y: number
}

export const useMouse = (elementID: string) => {
  const [startPosition, setStartPosition] = useState<IPosition>()
  const [currentPosition, setCurrentPosition] = useState<IPosition>()
  useEffect(() => {
    currentPosition?.x &&
      startPosition?.x &&
      currentPosition?.y &&
      startPosition?.y &&
      document
        .getElementById(elementID)
        ?.style.setProperty(
          'transform',
          `translate(${currentPosition.x - startPosition.x}px, ${
            currentPosition.y - startPosition.y
          }px`
        )

    if (!currentPosition) {
      setTimeout(
        () => document.getElementById(elementID)?.style.setProperty('transform', `translate(0, 0)`),
        300
      )
      return
    }
  }, [currentPosition])
  return { startPosition, setStartPosition, currentPosition, setCurrentPosition }
}
