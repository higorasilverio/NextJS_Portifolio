import * as S from './styles'
import * as VSC from 'react-icons/vsc'
import Link from 'next/link'
import { memo } from 'react'

interface IProps {
  label: string
  href: string
  passHref: boolean
  icon?: string
}

const Anchor = ({ label, href, passHref, icon }: IProps) => {
  const VSCIcon = icon ? VSC[icon] : null
  return (
    <Link href={href} passHref={passHref}>
      <S.Navigator>
        {label}
        {icon && <VSCIcon />}
      </S.Navigator>
    </Link>
  )
}

export default memo(Anchor)
