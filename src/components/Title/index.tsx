import * as S from './styles'
import { memo } from 'react'

interface IProps {
  label: string
}

const Title = ({ label }: IProps) => {
  return <S.Header>{label}</S.Header>
}

export default memo(Title)
