import { FC, SVGAttributes, useState } from 'react'
import css from './DownloadIcon.module.scss'
import classNames from 'classnames'

const DownloadIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
  const [animate, setAnimate] = useState<boolean>(false)
  function handleClick() {
    setAnimate(true)
    setTimeout(() => setAnimate(false), 1500)
  }
  return (
    <div {...props}>
      <svg
        onClick={handleClick}
        className={classNames({ [css.download_icon_animated]: animate })}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
    </div>
  )
}

export default DownloadIcon
