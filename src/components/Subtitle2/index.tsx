import * as S from './styles'
import { memo } from 'react'

interface IProps {
  label: string
}

const Subtitle2 = ({ label }: IProps) => {
  return <S.Text>{label}</S.Text>
}

export default memo(Subtitle2)
