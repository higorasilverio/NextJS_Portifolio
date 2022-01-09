import { HomeButton, Paper, Title, Wrapper } from '@components/index'
import { memo } from 'react'

const Features = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Features" />
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Features)
