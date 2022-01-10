import { HomeButton, Paper, Title, Wrapper } from '@components/index'
import { memo } from 'react'

const Cats = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Cats" />
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Cats)
