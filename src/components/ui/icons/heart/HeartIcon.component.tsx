import classNames from 'classnames'
import { FC } from 'react'
import { IActiveIcon } from '../Icon.interface'
import css from './HeartIcon.module.scss'

const HeartIcon: FC<IActiveIcon> = ({ active, onClick, ...props }) => {
  return (
    <svg
      className={css.heart}
      id={props.id}
      onClick={onClick}
      width='56'
      height='48'
      viewBox='0 0 56 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        className={css.heart_shadow}
        d='M12.1247 3.81409C21.2495 0.366105 28.283 8.98628 28.283 8.98628C28.283 8.98628 34.1761 1.32385 43.6809 3.81409C49.532 5.7621 52.9957 11.285 52.9957 16.6488C53.376 27.3763 28.283 45 28.283 45C28.283 45 3 28.3342 3 16.6488C3 10.1358 6.37579 5.92499 12.1247 3.81409Z'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        className={classNames({
          [css.heart_fill]: true,
          [css.inactive]: !active,
          [css.active]: active,
        })}
        d='M12.1247 3.81409C21.2495 0.366105 28.283 8.98628 28.283 8.98628C28.283 8.98628 34.1761 1.32385 43.6809 3.81409C49.532 5.7621 52.9957 11.285 52.9957 16.6488C53.376 27.3763 28.283 45 28.283 45C28.283 45 3 28.3342 3 16.6488C3 10.1358 6.37579 5.92499 12.1247 3.81409Z'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default HeartIcon
