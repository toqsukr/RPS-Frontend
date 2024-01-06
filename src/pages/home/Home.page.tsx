import { FC } from 'react'
import css from './Home.module.scss'
import { Header } from '@components/header/Header.component'
import { Footer } from '@components/footer/Footer.component'

const Home: FC = () => {
  return (
    <>
      <section id={css.home_main_section}>
        <Header />
        <div id={css.home_inner_container}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, saepe illum numquam,
          ullam fugit pariatur inventore eveniet maiores aliquid distinctio eligendi obcaecati eum
          ipsum deserunt nemo minus repellendus ratione ab.
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Home
