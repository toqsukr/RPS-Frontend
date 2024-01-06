import { FC } from 'react'
import css from './Home.module.scss'
import { Header } from '@components/header/Header.component'
import ImageBox from '@components/imageBox/ImageBox.component'
import { images } from '@components/imageBox/ImageBox.data'
import { useImage } from '@hooks/useImage.hook'

const Home: FC = () => {
  const { imageID, setImageID } = useImage()

  const currentImage = images[imageID]
  return (
    <>
      <section id={css.home_main_section}>
        <Header title={currentImage.title} />
        <section onClick={() => setImageID((imageID + 1) % 5)} id={css.home_inner_container}>
          <ImageBox {...images[imageID]} />
        </section>
      </section>
    </>
  )
}

export default Home
