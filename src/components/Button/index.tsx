import * as S from './styles'
import * as VSC from 'react-icons/vsc'
import { memo } from 'react'

interface IProps {
  label: string
  icon: string
  type: string
  onClick?: () => void
}

const Button = ({ label, icon, type, onClick }: IProps) => {
  const VSCIcon = VSC[icon]
  return (
    <S.StyledButton type={type} onClick={onClick}>
      <span>{label}</span>
      <div>
        <VSCIcon />
      </div>
    </S.StyledButton>
  )
}

export default memo(Button)
