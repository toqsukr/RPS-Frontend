import { WebAppUser } from '@vkruglikov/react-telegram-web-app'
import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { IImageRequest } from './user.interface'
import { TELEGRAM_API_URL } from '@util/constants'
import { IImage } from '@components/imageBox/ImageBox.interface'

export class UserService {
  static sendImage = async (image: IImage) => {
    const userString = Cookies.get('userInfo')
    const imageText = `${image.title}\n ${image.author.name} ${image.author.surname} \n\n ${
      image.description ?? 'Нет информации D:'
    }`

    const user: WebAppUser = userString ? JSON.parse(userString) : {}
    if (user) {
      const response = await axios.post<IImageRequest, AxiosResponse<string>>(
        `${TELEGRAM_API_URL}/sendPhoto`,
        {
          chat_id: 592417111,
          photo: image.src,
          caption: imageText,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      return response.data
    }
    return {}
  }
}
