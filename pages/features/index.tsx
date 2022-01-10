/* eslint-disable no-extra-parens */
import * as S from './styles'
import { Anchor, HomeButton, Paper, Title, Wrapper } from '@components/index'
import data from './pages.json'
import { memo } from 'react'

const Features = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Features" />
        <S.Grid>
          {data.map((page, index) => (
            <Anchor key={index} label={page.label} href={page.href} passHref />
          ))}
        </S.Grid>
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Features)
