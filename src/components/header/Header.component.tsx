import { FC } from 'react'
import { BsCollection } from 'react-icons/bs'
import css from './Header.module.scss'
import DownloadIcon from '@components/ui/icons/download/DownloadIcon.component'
import { UserService } from '@services/user/user.service'

export const Header: FC<{ title: string; src: string }> = ({ title, src }) => {
  async function handleDownload() {
    const response = await UserService.sendImage(src)
    console.log(response)
  }

  return (
    <header>
      <div id={css.home_header_container}>
        <BsCollection />
        <p>{title}</p>
        <DownloadIcon onClick={handleDownload} />
      </div>
    </header>
  )
}
