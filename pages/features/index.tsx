import * as S from './styles'
import { Anchor, HomeButton, Paper, Title, Wrapper } from '@components/index'
import { memo } from 'react'

const Features = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Features" />
        <S.Grid>
          <Anchor label="Advice" href="/features/advice" passHref icon="VscComment" />
        </S.Grid>
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Features)
