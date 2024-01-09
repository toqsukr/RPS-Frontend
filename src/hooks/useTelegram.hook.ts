import { useInitData } from '@vkruglikov/react-telegram-web-app'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

export const useTelegram = () => {
  const [initDataUnsafe] = useInitData()
  useEffect(() => {
    initDataUnsafe &&
      'user' in initDataUnsafe &&
      Cookies.set('userInfo', JSON.stringify(initDataUnsafe.user))
  }, [])
}
