import { IImage } from '@components/imageBox/ImageBox.interface'
import HeaderLayout from '@components/layout/header-layout/HeaderLayout'
import DownloadIcon from '@components/ui/icons/download/DownloadIcon.component'
import { UserService } from '@services/user/user.service'
import { FC } from 'react'
import { BsCollection } from 'react-icons/bs'

export const HomeHeader: FC<IImage> = ({ ...props }) => {
  async function handleDownload() {
    await UserService.sendImage(props)
  }

  return (
    <HeaderLayout>
      <BsCollection />
      <h1>{props.title}</h1>
      <DownloadIcon onClick={handleDownload} />
    </HeaderLayout>
  )
}
