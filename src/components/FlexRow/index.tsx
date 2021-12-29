import * as S from './styles'
import { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const FlexRow = ({ children }: IProps) => {
  return <S.Container>{children}</S.Container>
}

export default memo(FlexRow)
