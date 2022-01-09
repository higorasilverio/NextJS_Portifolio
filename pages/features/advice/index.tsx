import { HomeButton, Paper, Title, Wrapper } from '@components/index'
import { memo } from 'react'

const Advice = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Advice" />
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Advice)
