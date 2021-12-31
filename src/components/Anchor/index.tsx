import * as S from './styles'
import * as VSC from 'react-icons/vsc'
import Link from 'next/link'
import { memo } from 'react'

const Anchor = ({ label, href, passHref, icon }) => {
  const VSCIcon = VSC[icon]
  return (
    <Link href={href} passHref={passHref}>
      <S.Navigator>
        {label}
        <VSCIcon />
      </S.Navigator>
    </Link>
  )
}

export default memo(Anchor)
