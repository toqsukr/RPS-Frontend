import { useEffect, useState } from 'react'

interface IPosition {
  x: number
  y: number
}

export const useMouse = (elementID: string) => {
  const [startPosition, setStartPosition] = useState<IPosition>()
  const [currentPosition, setCurrentPosition] = useState<IPosition>()
  useEffect(() => {
    const transferingElement = document.getElementById(elementID)
    if (
      transferingElement &&
      currentPosition?.x &&
      startPosition?.x &&
      currentPosition?.y &&
      startPosition?.y
    ) {
      const maxOffset = 300
      const relativeX =
        Math.abs(2 * (currentPosition.x - startPosition.x)) > maxOffset
          ? 2 * (currentPosition.x - startPosition.x) < 0
            ? -maxOffset
            : maxOffset
          : 2 * (currentPosition.x - startPosition.x)

      const translateX = relativeX

      const translateY = (1 / 250000) * Math.pow(relativeX, 3)

      transferingElement?.style.setProperty(
        'transform',
        `translate(${translateX}px, ${translateY}px`
      )
    }

    if (!currentPosition) {
      setTimeout(() => transferingElement?.style.setProperty('transform', `translate(0, 0)`), 300)
      return
    }
  }, [currentPosition])
  return { startPosition, setStartPosition, currentPosition, setCurrentPosition }
}
