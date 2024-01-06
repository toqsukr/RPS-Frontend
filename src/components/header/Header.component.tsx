import { FC } from 'react'
import { BsCollection } from 'react-icons/bs'
import { AiOutlineReload } from 'react-icons/ai'

import css from './Header.module.scss'

export const Header: FC = () => {
  return (
    <header>
      <div id={css.home_header_container}>
        <BsCollection />
        <p>Lorem ipsum</p>
        <AiOutlineReload />
      </div>
    </header>
  )
}
