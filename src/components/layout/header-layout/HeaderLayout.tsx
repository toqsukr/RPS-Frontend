import { FC, PropsWithChildren } from 'react'
import css from './HeaderLayout.module.scss'

const HeaderLayout: FC<PropsWithChildren> = ({ children }) => {
  return <header id={css.home_header_container}>{children}</header>
}

export default HeaderLayout
