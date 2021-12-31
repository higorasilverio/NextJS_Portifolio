import * as S from './styles'
import HomeButton from '../../src/components/HomeButton'
import Image from 'next/image'
import Paper from '../../src/components/Paper'
import Subtitle from '../../src/components/Subtitle'
import Subtitle2 from '../../src/components/Subtitle2'
import Title2 from '../../src/components/Title2'
import Wrapper from '../../src/components/Wrapper'
import contactPic from '../../public/contact.jpg'
import { memo } from 'react'

const Contact = () => {
  return (
    <Wrapper>
      <Paper>
        <S.MainGrid>
          <S.LeftSide>
            <Image src={contactPic} alt="picture of the author" priority />
          </S.LeftSide>
          <S.RightSide>
            <S.TitleGrid>
              <Title2 label="Contact" />
            </S.TitleGrid>
            <S.Field>
              <Subtitle label="E-mail" />
              <Subtitle2 label="higor.asilverio_eng@hotmail.com" />
            </S.Field>
            <S.Field>
              <Subtitle label="Telefone" />
              <Subtitle2 label="+55 (19) 9 8346-4642" />
            </S.Field>
            <S.Field>
              <Subtitle label="LinkedIn" />
              <Subtitle2 label="linkedin.com/in/higorsilverio" />
            </S.Field>
            <S.Field>
              <Subtitle label="Direct" />
              <Subtitle2 label="instagram.com/higor.asilverio" />
            </S.Field>
          </S.RightSide>
        </S.MainGrid>
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Contact)