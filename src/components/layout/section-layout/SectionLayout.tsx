import { FC, PropsWithChildren } from 'react'
import css from './SectionLayout.module.scss'

const SectionLayout: FC<PropsWithChildren> = ({ children }) => {
  return <section id={css.main_section}>{children}</section>
}

export default SectionLayout
