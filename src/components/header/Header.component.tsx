import { FC } from 'react'
import { BsCollection } from 'react-icons/bs'
import { AiOutlineReload } from 'react-icons/ai'

import css from './Header.module.scss'

export const Header: FC<{ title: string }> = ({ title }) => {
  return (
    <header>
      <div id={css.home_header_container}>
        <BsCollection />
        <p>{title}</p>
        <AiOutlineReload />
      </div>
    </header>
  )
}
