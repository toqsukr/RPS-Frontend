import { useInitData } from '@vkruglikov/react-telegram-web-app'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

export const useTelegram = () => {
  const [initDataUnsafe] = useInitData()
  useEffect(() => {
    initDataUnsafe &&
      'user' in initDataUnsafe &&
      Cookies.set('user', JSON.stringify(initDataUnsafe.user))
    const savedData = Cookies.get('user')
    console.log(initDataUnsafe)
    console.log(savedData)
  }, [])
}
