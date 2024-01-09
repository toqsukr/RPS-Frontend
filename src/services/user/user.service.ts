import { WebAppUser } from '@vkruglikov/react-telegram-web-app'
import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { IImageRequest } from './user.interface'
import { IImage } from '@components/imageBox/ImageBox.interface'
import { VITE_REACT_APP_HOST_URL } from '@util/constants'

export class UserService {
  static sendImage = async (image: IImage) => {
    const userString = Cookies.get('userInfo')
    const user: WebAppUser | null = userString ? JSON.parse(userString) : null
    if (!!user) {
      const response = await axios.post<IImageRequest, AxiosResponse<string>>(
        `${VITE_REACT_APP_HOST_URL}/image`,
        {
          userID: user.id,
          imageData: image,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log(response)
      return response.data
    }
    return {}
  }
}
