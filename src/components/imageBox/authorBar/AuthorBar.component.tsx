import { FC } from 'react'
import { HiUser } from 'react-icons/hi2'

import { IAuthor } from './AuthorBar.interface'
import css from './AuthorBar.module.scss'

const AuthorBar: FC<IAuthor> = ({ ...props }) => {
  const { name, surname } = props
  return (
    <div id={css.home_author_container}>
      <HiUser />
      <span>{`${name} ${surname}`}</span>
    </div>
  )
}

export default AuthorBar
