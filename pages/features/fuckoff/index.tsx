import { HomeButton, Paper, Title, Wrapper } from '@components/index'
import { memo } from 'react'

const FuckOff = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Fuck Off" />
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(FuckOff)
