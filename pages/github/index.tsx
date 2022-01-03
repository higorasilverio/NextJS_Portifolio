import { memo, useEffect, useState } from 'react'
import HomeButton from '../../src/components/HomeButton'
import { Octokit } from 'octokit'
import Paper from '../../src/components/Paper'
import Title from '../../src/components/Title'
import Wrapper from '../../src/components/Wrapper'


const Github = ({ githubToken }) => {
  const [name, setName] = useState<string>('loading...')

  useEffect(() => {
    const getLoginName = async () => {
      const octokit = new Octokit({ auth: githubToken })
      const {
        data: { login }
      } = await octokit.rest.users.getAuthenticated()
      setName(login)
    }
    getLoginName()
  }, [githubToken])

  return (
    <Wrapper>
      <Paper>
        <Title label="Github" />
        <span>{name}</span>
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Github)

export const getServerSideProps = () => {
  // eslint-disable-next-line no-undef
  const githubToken = process.env.GITHUB_TOKEN
  return {
    props: {
      githubToken
    }
  }
}
