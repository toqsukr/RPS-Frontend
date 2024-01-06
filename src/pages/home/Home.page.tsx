import { FC } from 'react'
import css from './Home.module.scss'
import { Header } from '@components/header/Header.component'
import ImageBox from '@components/imageBox/ImageBox.component'

const Home: FC = () => {
  return (
    <>
      <section id={css.home_main_section}>
        <Header />
        <section id={css.home_inner_container}>
          <ImageBox />
        </section>
      </section>
    </>
  )
}

export default Home
