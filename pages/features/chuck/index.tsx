import { HomeButton, Paper, Title, Wrapper } from '@components/index'
import { memo } from 'react'

const Chuck = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Chuck" />
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Chuck)
