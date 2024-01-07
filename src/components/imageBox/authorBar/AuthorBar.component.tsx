import { FC } from 'react'
import { IAuthor } from './AuthorBar.interface'
import css from './AuthorBar.module.scss'

const AuthorBar: FC<IAuthor> = ({ ...props }) => {
  const { photoURL, name, surname } = props
  return (
    <div id={css.home_author_container}>
      <img src={photoURL ?? '/images/profile.png'} alt="" draggable="false" />
      <span>{`${name} ${surname}`}</span>
    </div>
  )
}

export default AuthorBar
