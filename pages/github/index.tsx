import HomeButton from '../../src/components/HomeButton'
import Paper from '../../src/components/Paper'
import Title from '../../src/components/Title'
import Wrapper from '../../src/components/Wrapper'
import { memo } from 'react'

const Github = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Github" />
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Github)
