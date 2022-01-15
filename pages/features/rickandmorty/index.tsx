import * as S from './styles'
import { Button, HomeButton, Paper, Subtitle, Subtitle2, Title, Wrapper } from '@components/index'
import { memo, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { isEmpty } from 'lodash'

const RickAndMorty = () => {
  const [char, setChar] = useState(null)
  const [charCount, setCharCount] = useState<number>(null)
  const [charId, setCharId] = useState<number>(null)
  const [searchValue, setSearchValue] = useState<number>(null)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://rickandmortyapi.com/api/character')

      setCharCount(result.data.info.count)
    }

    fetchData()
  }, [])

  const getCharacter = useCallback(async (_id = null, _search = null) => {
    let baseUrl = 'https://rickandmortyapi.com/api/character/'

    if (_id) {
      baseUrl = `${baseUrl}${_id}`
    }

    if (_search) {
      baseUrl = `${baseUrl}?name=${_search}`
    }

    const result = await axios(`${baseUrl}`)

    if (isEmpty(result.data.results) && !isEmpty(result.data)) {
      setChar(result.data)
      return
    }

    if (!isEmpty(result.data.results[0])) {
      setChar(result.data.results[0])
      return
    }

    setError(true)
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

  const changeSearchInput = (value) => {
    setSearchValue(value)
  }

  const handleSearch = () => {
    getCharacter(null, searchValue)
  }

  return (
    <Wrapper>
      <Paper>
        <Title label="Rick and Morty" />

        {!charCount && !char && <Subtitle label="Loading" />}

        {charCount && !char && (
          <>
            <Subtitle label={`There is actually ${charCount} characters at Rick & Morty API`} />
            <Button label="Check" type="button" onClick={() => setCharId(1)} icon="VscEye" />
          </>
        )}

        {char && (
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
            {error && <span>Character not found</span>}
          </>
        )}
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(RickAndMorty)
