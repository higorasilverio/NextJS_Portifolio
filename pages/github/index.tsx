/* eslint-disable no-console */
/* eslint-disable no-extra-parens */
import * as S from './styles'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
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
  const [searching, setSearching] = useState<boolean>(true)

  const handleVisitClick = () => {
    window.open(user.html_url, '_blank').focus()
  }

  const handleSearchClick = () => {
    setSearching(true)
  }

  const handleBio = () => {
    if (user?.bio) {
      return user.bio.length > 40 ? `${user.bio.substring(0, 40)}...` : user.bio
    }
    return 'No bio'
  }

  const getUserData = (login) => {
    api
      .get(`/users/${login}`)
      .then((response) => {
        setUser(response.data)
        console.log(response.data)
        setSearching(false)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }

  useEffect(() => {
    setSearching(true)
    getUserData('higorasilverio')
  }, [])

  return (
    <Wrapper>
      <Paper>
        <Title label="Github" />

        {searching && (
          <Formik
            initialValues={{ login: 'higorasilverio' }}
            validationSchema={Yup.object({
              login: Yup.string().min(5, 'Must be 5 characters or more').required('Required')
            })}
            onSubmit={(values) => getUserData(values.login)}
          >
            <Form>
              <Field name="login" type="text" />
              <ErrorMessage name="login" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        )}

        {!searching && (
          <>
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
                      <S.TableHead colspan={4}>Information</S.TableHead>
                    </S.TableRow>
                  </S.TableHeader>
                  <S.TableBody>
                    <S.TableRow>
                      <S.TableData bold>Name</S.TableData>
                      <S.TableData colspan={3}>{user?.name}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                      <S.TableData bold>Login</S.TableData>
                      <S.TableData colspan={3}>{user?.login}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                      <S.TableData bold>Location</S.TableData>
                      <S.TableData colspan={3}>{user?.location}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                      <S.TableData bold>Bio</S.TableData>
                      <S.TableData colspan={3}>{handleBio()}</S.TableData>
                    </S.TableRow>
                  </S.TableBody>
                </S.Table>
              </S.TableWrapper>
            </FlexRow>
            <S.FormWrapper>
              <S.Action onClick={() => handleVisitClick()}>
                <S.Text>VISIT</S.Text>
                <S.Displayer>
                  <ActionIcon
                    src="visual"
                    icon="VscGithubAlt"
                    color="blue"
                    size="lg"
                    gradient={800}
                  />
                </S.Displayer>
              </S.Action>
              <S.Action onClick={() => handleSearchClick()}>
                <S.Text>SEARCH</S.Text>
                <S.Displayer>
                  <ActionIcon src="visual" icon="VscSearch" color="blue" size="lg" gradient={800} />
                </S.Displayer>
              </S.Action>
            </S.FormWrapper>
          </>
        )}
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(Github)
