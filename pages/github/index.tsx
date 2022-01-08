/* eslint-disable no-extra-parens */
import * as S from './styles'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { memo, useCallback, useEffect, useState } from 'react'
import ActionIcon from '../../src/components/ActionIcon'
import Button from '@components/Button'
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
  const [notFound, setNotFound] = useState<boolean>(false)

  const handleVisitClick = useCallback(() => {
    window.open(user.html_url, '_blank').focus()
  }, [user.html_url])

  const handleSearchClick = useCallback(() => {
    setSearching(true)
  }, [])

  const handleBio = useCallback(() => {
    if (user?.bio) {
      return user.bio.length > 40 ? `${user.bio.substring(0, 40)}...` : user.bio
    }
    return 'No bio'
  }, [user.bio])

  const handleRetryClick = useCallback(() => {
    setNotFound(false)
  }, [])

  const getUserData = useCallback((login) => {
    api
      .get(`/users/${login}`)
      .then((response) => {
        setUser(response.data)
        setSearching(false)
      })
      .catch(() => {
        setNotFound(true)
      })
  }, [])

  useEffect(() => {
    setSearching(true)
    getUserData('higorasilverio')
  }, [getUserData])

  return (
    <Wrapper>
      <Paper>
        <Title label="Github" />

        {searching && notFound && (
          <S.FormikWrapper>
            <S.RetryMessage>User not found!</S.RetryMessage>
            <Button
              type="reset"
              icon="VscRefresh"
              label="Retry"
              onClick={() => handleRetryClick()}
            />
          </S.FormikWrapper>
        )}

        {searching && !notFound && (
          <Formik
            initialValues={{ login: 'higorasilverio' }}
            validationSchema={Yup.object({
              login: Yup.string().min(5, 'Too Short').required('Type something')
            })}
            onSubmit={(values) => getUserData(values.login)}
          >
            <Form>
              <S.FormikWrapper>
                <S.Field name="login" type="text" />
                <S.ErrorMessage component="span" name="login" />
                <Button type="submit" icon="VscSearch" label="Submit" />
              </S.FormikWrapper>
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
