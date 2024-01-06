import { FC } from 'react'
import css from './Home.module.scss'
import { Header } from '@components/header/Header.component'

const Home: FC = () => {
  return (
    <>
      <section id={css.home_main_section}>
        <Header />
      </section>
    </>
  )
}

export default Home
