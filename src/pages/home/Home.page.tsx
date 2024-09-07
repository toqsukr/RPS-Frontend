import { HomeHeader } from '@components/home-header/HomeHeader.component'
import ImageBox from '@components/imageBox/ImageBox.component'
import { images } from '@components/imageBox/ImageBox.data'
import SectionLayout from '@components/layout/section-layout/SectionLayout'
import { useImage } from '@hooks/useImage.hook'
import { useTelegram } from '@hooks/useTelegram.hook'
import { FC } from 'react'
import css from './Home.module.scss'

const Home: FC = () => {
  const { imageID, setImageID } = useImage()

  useTelegram()
  return (
    <SectionLayout>
      <HomeHeader {...images[imageID]} />
      <section id={css.home_inner_container}>
        <ImageBox currentImageID={imageID} images={images} setCurrentImageID={setImageID} />
      </section>
    </SectionLayout>
  )
}

export default Home
