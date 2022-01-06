/* eslint-disable no-console */
/* eslint-disable no-extra-parens */
import * as S from './styles'
import { memo, useEffect, useState } from 'react'
import ActionIcon from '../../src/components/ActionIcon'
import FlexRow from '@components/FlexRow'
import GithubInterface from '@utils/interfaces/githubInterface'
import HomeButton from '@components/HomeButton'
import Image from 'next/image'
import Paper from '@components/Paper'
import Title from '@components/Title'
import Wrapper from '@components/Wrapper'
import api from '@service/api'

const Github = () => {
  const [user, setUser] = useState<GithubInterface>(null)

  const handleActionClick = () => {
    window.open(user.html_url, '_blank').focus()
  }

  useEffect(() => {
    api
      .get('/users/higorasilverio')
      .then((response) => {
        setUser(response.data)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  return user ? (
    <Wrapper>
      <Paper>
        <Title label="Github" />
        <FlexRow>
          <S.ImageWrapper>
            <Image
              alt="Github profile picture"
              src={`https://github.com/${user?.login}.png`}
              width={200}
              height={200}
            />
          </S.ImageWrapper>
          <S.TableWrapper>
            <S.Table>
              <S.TableHeader>
                <S.TableRow>
                  <S.TableHead colspan={6}>Information</S.TableHead>
                </S.TableRow>
              </S.TableHeader>
              <S.TableBody>
                <S.TableRow>
                  <S.TableData bold>Name</S.TableData>
                  <S.TableData colspan={2}>{user?.name}</S.TableData>
                  <S.TableData bold>Login</S.TableData>
                  <S.TableData colspan={2}>{user?.login}</S.TableData>
                </S.TableRow>
                <S.TableRow>
                  <S.TableData bold>Location</S.TableData>
                  <S.TableData colspan={2}>{user?.location}</S.TableData>
                </S.TableRow>
                <S.TableRow>
                  <S.TableData bold>Bio</S.TableData>
                  <S.TableData colspan={5}>{user?.bio}</S.TableData>
                </S.TableRow>
              </S.TableBody>
            </S.Table>
          </S.TableWrapper>
        </FlexRow>
        <S.Action onClick={() => handleActionClick()}>
          <ActionIcon src="visual" icon="VscGithubAlt" color="blue" size="xl" gradient={800} />
        </S.Action>
      </Paper>
      <HomeButton />
    </Wrapper>
  ) : (
    <>higor</>
  )
}

export default memo(Github)
