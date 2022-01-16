/* eslint-disable no-alert */
import * as S from './styles'
import {
  Button,
  HomeButton,
  Loader,
  Paper,
  Subtitle,
  Subtitle2,
  Title,
  Wrapper
} from '@components/index'
import { memo, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { isEmpty } from 'lodash'

interface IError {
  message: string
  state: boolean
}

const RickAndMorty = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [char, setChar] = useState(null)
  const [charCount, setCharCount] = useState<number>(null)
  const [charId, setCharId] = useState<number>(null)
  const [searchValue, setSearchValue] = useState<string>(null)
  const [error, setError] = useState<IError>({ message: '', state: false })

  useEffect(() => {
    const fetchData = async () => {
      await axios('https://rickandmortyapi.com/api/character')
        .then((result) => {
          setCharCount(result.data.info.count)
          setLoading(false)
        })
        .catch(() =>
          setError({ message: 'We had an unexpected error. Please, reload!', state: true })
        )
    }

    fetchData()
  }, [])

  const getCharacter = useCallback(async (_id = null, _search = null) => {
    setError({ message: '', state: false })

    let baseUrl = 'https://rickandmortyapi.com/api/character/'

    if (_id) {
      baseUrl = `${baseUrl}${_id}`
    }

    if (_search) {
      baseUrl = `${baseUrl}?name=${_search}`
    }

    await axios(`${baseUrl}`)
      .then((result) => {
        if (isEmpty(result.data.results) && !isEmpty(result.data)) {
          setChar(result.data)
          return
        }

        if (!isEmpty(result.data.results[0])) {
          setChar(result.data.results[0])
          return
        }
      })
      .catch(() =>
        setError({ message: 'Your search returned nothing. Please, try again!', state: true })
      )
  }, [])

  useEffect(() => {
    if (charId !== null) {
      getCharacter(charId)
    }
  }, [charId, getCharacter])

  const handleChangeId = useCallback(
    (bool) => {
      if (!bool && charId === 1) {
        return
      }

      setCharId((oldValue) => (bool ? oldValue + 1 : oldValue - 1))
    },
    [charId]
  )

  const changeSearchInput = useCallback((value) => {
    setSearchValue(value)
  }, [])

  const handleSearch = useCallback(() => {
    getCharacter(null, searchValue)
  }, [getCharacter, searchValue])

  const renderContent = () => {
    if (error.state) {
      return (
        <>
          <Subtitle label={error.message} />
          <Button
            label="Return"
            type="button"
            onClick={() => setError({ message: '', state: false })}
            icon="VscDebugRestart"
          />
        </>
      )
    }

    if (loading) {
      return <Loader />
    }

    if (!char) {
      return (
        <>
          <Subtitle label={`There are currently ${charCount} characters at Rick & Morty API`} />
          <Button label="Check" type="button" onClick={() => setCharId(1)} icon="VscEye" />
        </>
      )
    } else {
      return (
        <>
          <S.DataWrapper>
            <Image src={char.image} alt="char picture" priority width={300} height={300} />
            <S.InformationWrapper>
              <Subtitle className={'data-name'} label={char.name} />

              <S.SubWrapper>
                <Subtitle2 label="Gender:" />
                <Subtitle2 label={char.gender} />
              </S.SubWrapper>
              <S.SubWrapper>
                <Subtitle2 label="Species:" />
                <Subtitle2 label={char.species} />
              </S.SubWrapper>
              <S.SubWrapper>
                <Subtitle2 label="Status:" />
                <Subtitle2 label={char.status} />
              </S.SubWrapper>
              <S.SubWrapper>
                <Subtitle2 label="Location:" />
                <Subtitle2 label={char.location.name} />
              </S.SubWrapper>
              <S.SubWrapper>
                <Subtitle2 label="Origin:" />
                <Subtitle2 label={char.origin.name} />
              </S.SubWrapper>
            </S.InformationWrapper>
          </S.DataWrapper>
          <S.ButtonWrapper>
            <Button
              icon="VscFoldUp"
              label="UP"
              type="button"
              key={'button0'}
              onClick={() => handleChangeId(true)}
            />
            <Button
              icon="VscFoldDown"
              label="DOWN"
              type="button"
              key={'button1'}
              onClick={() => handleChangeId(false)}
            />
          </S.ButtonWrapper>
          <div>
            <input type={'text'} onChange={(e) => changeSearchInput(e.currentTarget.value)} />
            <button type="button" onClick={() => handleSearch()}>
              Search
            </button>
          </div>
          {error.state && <span>Character not found</span>}
        </>
      )
    }
  }

  return (
    <Wrapper>
      <Paper>
        <S.TitleWrapper>
          <Title label="Rick and Morty" />
        </S.TitleWrapper>
        {renderContent()}
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(RickAndMorty)
