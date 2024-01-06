import { images } from '@components/imageBox/ImageBox.data'
import css from '@components/imageBox/ImageBox.module.scss'
import { useEffect, useState } from 'react'

export const useImage = () => {
  const [imageID, setImageID] = useState<number>(0)
  useEffect(() => {
    document
      .getElementById(css.home_image_box_container)
      ?.style.setProperty('background-image', `url(${images[imageID].src})`)
  }, [imageID])
  return { imageID, setImageID }
}
