import * as S from './styles'
import { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Wrapper = ({ children }: IProps) => {
  return <S.Container>{children}</S.Container>
}

export default memo(Wrapper)
