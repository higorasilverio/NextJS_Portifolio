/* eslint-disable no-extra-parens */
import * as S from './styles'
import * as Yup from 'yup'
import { ActionIcon, Button, FlexRow, HomeButton, Paper, Title, Wrapper } from '@components/index'
import { Form, Formik } from 'formik'
import { memo, useCallback, useEffect, useState } from 'react'
import GithubInterface from '@utils/interfaces/githubInterface'
import Image from 'next/image'
import api from '@service/api'

const Github = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<GithubInterface>(null)
  const [searching, setSearching] = useState<boolean>(true)
  const [notFound, setNotFound] = useState<boolean>(false)

  const handleVisitClick = useCallback(() => {
    window.open(user.html_url, '_blank').focus()
  }, [user?.html_url])

  const handleBio = useCallback(() => {
    return user?.bio && user?.bio.length > 40 ? `${user.bio.substring(0, 40)}...` : user?.bio
  }, [user?.bio])

  const getUserData = useCallback((login) => {
    setLoading(true)
    api
      .get(`/users/${login}`)
      .then((response) => setUser(response.data))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setSearching(true)
    if (!user?.login) {
      getUserData('higorasilverio')
    }
    setSearching(false)
  }, [getUserData, user])

  return (
    <Wrapper>
      <Paper>
        <Title label="Github" />

        {loading && <S.Loader />}

        {!loading && searching && notFound && (
          <S.FormikWrapper>
            <S.RetryMessage>User not found!</S.RetryMessage>
            <Button
              type="reset"
              icon="VscRefresh"
              label="Retry"
              onClick={() => setNotFound(false)}
            />
          </S.FormikWrapper>
        )}

        {!loading && searching && !notFound && (
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

        {!loading && !searching && (
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
                    {user?.name && (
                      <S.TableRow>
                        <S.TableData bold>Name</S.TableData>
                        <S.TableData colspan={3}>{user?.name}</S.TableData>
                      </S.TableRow>
                    )}
                    {user?.login && (
                      <S.TableRow>
                        <S.TableData bold>Login</S.TableData>
                        <S.TableData colspan={3}>{user?.login}</S.TableData>
                      </S.TableRow>
                    )}
                    {user?.location && (
                      <S.TableRow>
                        <S.TableData bold>Location</S.TableData>
                        <S.TableData colspan={3}>{user?.location}</S.TableData>
                      </S.TableRow>
                    )}
                    {user?.bio && (
                      <S.TableRow>
                        <S.TableData bold>Bio</S.TableData>
                        <S.TableData colspan={3}>{handleBio()}</S.TableData>
                      </S.TableRow>
                    )}
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
              <S.Action onClick={() => setSearching(true)}>
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
