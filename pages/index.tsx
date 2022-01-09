import { Anchor, FlexRow, Paper, Title, Wrapper } from '@components/index'
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
