import { FC } from 'react'
import { BsCollection } from 'react-icons/bs'
import { FiDownload } from 'react-icons/fi'

import css from './Header.module.scss'

export const Header: FC<{ title: string }> = ({ title }) => {
  return (
    <header>
      <div id={css.home_header_container}>
        <BsCollection />
        <p>{title}</p>
        <FiDownload />
      </div>
    </header>
  )
}
