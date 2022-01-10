import { HomeButton, Paper, Title, Wrapper } from '@components/index'
import { memo } from 'react'

const Dogs = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Dogs" />
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Dogs)
