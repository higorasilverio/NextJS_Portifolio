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
          <Button label="Features" icon="VscFlame" />
          <Button label="Github" icon="VscGithubAlt" />
          <Button label="Social" icon="VscFeedback" />
          <Button label="Contact" icon="VscMegaphone" />
        </FlexRow>
      </Paper>
    </Wrapper>
  )
}

export default memo(Home)
