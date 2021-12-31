import * as S from './styles'
import * as VSC from 'react-icons/vsc'
import { memo } from 'react'

interface IProps {
  label: string
  icon: string
}

const Button = ({ label, icon }: IProps) => {
  const VSCIcon = VSC[icon]
  return (
    <S.StyledButton>
      <span>{label}</span>
      <div>
        <VSCIcon />
      </div>
    </S.StyledButton>
  )
}

export default memo(Button)
