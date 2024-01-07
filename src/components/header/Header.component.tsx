import { FC } from 'react'
import { BsCollection } from 'react-icons/bs'
import css from './Header.module.scss'
import DownloadIcon from '@components/ui/icons/download/DownloadIcon.component'

export const Header: FC<{ title: string }> = ({ title }) => {
  return (
    <header>
      <div id={css.home_header_container}>
        <BsCollection />
        <p>{title}</p>
        <DownloadIcon />
      </div>
    </header>
  )
}
