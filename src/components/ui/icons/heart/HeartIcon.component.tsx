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
      width='32'
      height='27'
      viewBox='0 0 32 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        className={css.heart_shadow}
        d='M2.71365 3.8214C9.54299 -3.02959 16.1369 4.75034 16.1369 4.75034C16.1369 4.75034 21.9065 -2.91347 29.0892 3.8214C32.033 7.53719 31.2088 11.253 29.0892 14.0398C26.0773 18 17.079 26 16.1369 26C15.0773 26 5.44424 18 2.71365 14.0398C0.712021 11.1369 1.19209e-07 7 2.71365 3.8214Z'
        stroke-linejoin='round'
      />
      <path
        className={classNames({
          [css.heart_fill]: true,
          [css.inactive]: !active,
          [css.active]: active,
        })}
        d='M2.71365 3.8214C9.54299 -3.02959 16.1369 4.75034 16.1369 4.75034C16.1369 4.75034 21.9065 -2.91347 29.0892 3.8214C32.033 7.53719 31.2088 11.253 29.0892 14.0398C26.0773 18 17.079 26 16.1369 26C15.0773 26 5.44424 18 2.71365 14.0398C0.712021 11.1369 1.19209e-07 7 2.71365 3.8214Z'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default HeartIcon
