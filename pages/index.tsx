import Anchor from '../src/components/Anchor'
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
          <Anchor label="Features" href="/features" passHref={true} icon="VscFlame" />
          <Anchor label="Github" href="/github" passHref={true} icon="VscGithubAlt" />
          <Anchor label="Contact" href="/contact" passHref={true} icon="VscMegaphone" />
        </FlexRow>
      </Paper>
    </Wrapper>
  )
}

export default memo(Home)
