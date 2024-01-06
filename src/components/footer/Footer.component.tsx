import { FC } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import css from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <div id={css.home_footer_container}>
      <AiOutlineDislike />
      <IoMdHeartEmpty />
      <AiOutlineLike />
    </div>
  )
}
