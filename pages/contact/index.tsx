import * as S from './styles'
import ActionIcon from '../../src/components/ActionIcon'
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
  const handleActionClick = (button) => {
    let url = ''
    switch (button) {
    case 'mail':
      url = 'https://outlook.live.com/owa/'
      break
    case 'phone':
      url = 'https://web.whatsapp.com/'
      break
    case 'linkedIn':
      url = 'https://www.linkedin.com/in/higorsilverio/'
      break
    case 'instagram':
      url = 'https://www.instagram.com/higor.asilverio/'
      break
    default:
      break
    }
    window.open(url, '_blank').focus()
  }

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
            <S.SideGrid>
              <S.Field>
                <Subtitle label="E-mail" />
                <Subtitle2 label="higor.asilverio_eng@hotmail.com" />
              </S.Field>
              <S.Action onClick={() => handleActionClick('mail')}>
                <ActionIcon src="visual" icon="VscMail" color="blue" size="xl" gradient={800} />
              </S.Action>
            </S.SideGrid>
            <S.SideGrid>
              <S.Field>
                <Subtitle label="Telefone" />
                <Subtitle2 label="+55 (19) 9 8346-4642" />
              </S.Field>
              <S.Action onClick={() => handleActionClick('phone')}>
                <ActionIcon
                  src="visual"
                  icon="VscCallIncoming"
                  color="blue"
                  size="xl"
                  gradient={800}
                />
              </S.Action>
            </S.SideGrid>
            <S.SideGrid>
              <S.Field>
                <Subtitle label="LinkedIn" />
                <Subtitle2 label="linkedin.com/in/higorsilverio" />
              </S.Field>
              <S.Action onClick={() => handleActionClick('linkedIn')}>
                <ActionIcon src="awesome" icon="FaLinkedin" color="blue" size="xl" gradient={800} />
              </S.Action>
            </S.SideGrid>
            <S.SideGrid>
              <S.Field>
                <Subtitle label="Direct" />
                <Subtitle2 label="instagram.com/higor.asilverio" />
              </S.Field>
              <S.Action onClick={() => handleActionClick('instagram')}>
                <ActionIcon
                  src="awesome"
                  icon="FaInstagram"
                  color="blue"
                  size="xl"
                  gradient={800}
                />
              </S.Action>
            </S.SideGrid>
          </S.RightSide>
        </S.MainGrid>
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Contact)
