import classNames from 'classnames'
import { FC } from 'react'
import { IActiveIcon } from '../Icon.interface'
import css from './StarIcon.module.scss'

const StarIcon: FC<IActiveIcon> = ({ active, onClick, ...props }) => {
  return (
    <svg
      onClick={onClick}
      id={props.id}
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      strokeLinejoin='round'
      strokeLinecap='round'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        className={css.star_shadow}
        d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
      />
      <path
        className={classNames({
          [css.star_fill]: true,
          [css.active]: active,
          [css.inactive]: !active,
        })}
        d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
      />
    </svg>
  )
}

export default StarIcon
