import Paper from '../../src/components/Paper'
import Title from '../../src/components/Title'
import Wrapper from '../../src/components/Wrapper'
import { memo } from 'react'

const Features = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Features" />
      </Paper>
    </Wrapper>
  )
}

export default memo(Features)
