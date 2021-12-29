import Button from '../src/components/Button'
import FlexRow from '../src/components/FlexRow'
import Paper from '../src/components/Paper'
import Title from '../src/components/Title'
import Wrapper from '../src/components/Wrapper'
import { memo } from 'react'

const Home = () => {
  return (
    <Wrapper>
      <Paper>
        <Title label="Welcome" />
        <FlexRow>
          <Button label="Site Features" />
          <Button label="Github Page" />
          <Button label="Social Networks" />
          <Button label="Contact Me" />
        </FlexRow>
      </Paper>
    </Wrapper>
  )
}

export default memo(Home)
