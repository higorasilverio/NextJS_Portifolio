import * as S from './styles'
import Link from 'next/link'
import { VscHome } from 'react-icons/vsc'
import { memo } from 'react'

const HomeButton = () => {
  return (
    <Link href="/">
      <S.Wrapper>
        <S.Navigator>
          <VscHome />
        </S.Navigator>
      </S.Wrapper>
    </Link>
  )
}

export default memo(HomeButton)
