import * as FA from 'react-icons/fa'
import * as S from './styles'
import * as VSC from 'react-icons/vsc'
import { memo } from 'react'
import { theme } from '../../../styles/theme'

interface IProps {
  icon: string
  src: string
  size: string
  color: string
  gradient: number
}

const ActionIcon = ({ icon, src, size, color, gradient }: IProps) => {
  const Icon = src === 'visual' ? VSC[icon] : FA[icon]
  const iconColor = theme.pallete[color][gradient]
  const iconSize = theme.rawSizes[size]

  return (
    <S.Wrapper color={iconColor} size={iconSize}>
      <Icon />
    </S.Wrapper>
  )
}

export default memo(ActionIcon)
