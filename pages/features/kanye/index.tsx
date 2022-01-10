import { HomeButton, Paper, Title, Wrapper } from '@components/index'
import { memo } from 'react'

const Kanye = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Kanye West" />
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Kanye)
