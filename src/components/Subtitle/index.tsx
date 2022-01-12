import * as S from './styles'
import { memo } from 'react'

interface IProps {
  label: string
  className?: string
}

const Subtitle = ({ label, className }: IProps) => {
  return <S.Text className={className}>{label}</S.Text>
}

export default memo(Subtitle)
