import { memo, useEffect, useState } from 'react'
import GithubInterface from '@utils/interfaces/githubInterface'
import HomeButton from '@components/HomeButton'
import Image from 'next/image'
import Paper from '@components/Paper'
import Title from '@components/Title'
import Wrapper from '@components/Wrapper'
import api from '@service/api'

const Github = () => {
  const [user, setUser] = useState<GithubInterface>(null)

  useEffect(() => {
    api
      .get('/users/higorasilverio')
      .then(response =>
        setUser(response.data)
      )
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  return user ?
    <Wrapper>
      <Paper>
        <Title label="Github" />
        <Image src={`https://github.com/${user?.login}.png`} width={100} height={100} />
        <p>Usuário: {user?.login}</p>
        <p>Biografia: {user?.bio}</p>
      </Paper>
      <HomeButton />
    </Wrapper>
    :
    <>higor</>


}

export default memo(Github)
