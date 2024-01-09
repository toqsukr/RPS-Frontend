import { WebAppUser } from '@vkruglikov/react-telegram-web-app'
import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { IImageRequest } from './user.interface'
import { HOST_URL } from '@util/constants'

export class UserService {
  static sendImage = async (imageURL: string) => {
    const userString = Cookies.get('userInfo')
    const user: WebAppUser = userString ? JSON.parse(userString) : {}
    // if (user) {
    const response = await axios.post<IImageRequest, AxiosResponse<string>>(
      `${HOST_URL}/image`,
      {
        userID: 592417111,
        imageURL: imageURL,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data
    // }
    // return {}
  }
}
