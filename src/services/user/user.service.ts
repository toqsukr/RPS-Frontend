import { WebAppUser } from '@vkruglikov/react-telegram-web-app'
import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { IImageRequest } from './user.interface'
import { IImage } from '@components/imageBox/ImageBox.interface'

export class UserService {
  static sendImage = async (image: IImage) => {
    const userString = Cookies.get('userInfo')
    const user: WebAppUser = userString ? JSON.parse(userString) : {}
    if (user) {
      const response = await axios.post<IImageRequest, AxiosResponse<string>>(
        `${import.meta.env.REACT_APP_HOST_URL}/image`,
        {
          userID: user.username,
          imageData: image,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      return response.data
    }
    return {}
  }
}
