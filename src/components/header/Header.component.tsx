import { FC } from 'react'
import { BsCollection } from 'react-icons/bs'
import css from './Header.module.scss'
import DownloadIcon from '@components/ui/icons/download/DownloadIcon.component'
import { UserService } from '@services/user/user.service'
import { IImage } from '@components/imageBox/ImageBox.interface'

export const Header: FC<IImage> = ({ ...props }) => {
  async function handleDownload() {
    await UserService.sendImage(props)
  }

  return (
    <header>
      <div id={css.home_header_container}>
        <BsCollection />
        <p>{props.title}</p>
        <DownloadIcon onClick={handleDownload} />
      </div>
    </header>
  )
}
