import { HomeButton, Paper, Title, Wrapper } from '@components/index'
import { memo } from 'react'

const RickAndMorty = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Rick and Morty" />
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(RickAndMorty)
