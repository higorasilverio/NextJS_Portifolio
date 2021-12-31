import Paper from '../../src/components/Paper'
import Title from '../../src/components/Title'
import Wrapper from '../../src/components/Wrapper'
import { memo } from 'react'

const Contact = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Contact" />
      </Paper>
    </Wrapper>
  )
}

export default memo(Contact)
