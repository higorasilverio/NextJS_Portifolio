import * as S from './styles'
import { Button, HomeButton, Paper, Subtitle, Subtitle2, Title, Wrapper } from '@components/index'
import { memo, useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

const RickAndMorty = () => {
  const [char, setChar] = useState(null)
  const [charCount, setCharCount] = useState<number>(null)
  const [charId, setCharId] = useState<number>(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://rickandmortyapi.com/api/character')

      setCharCount(result.data.info.count)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const getCharacter = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character/${charId}`)

      setChar(result)
    }
    if (charId !== null) {
      getCharacter()
    }
  }, [charId])

  const handleChangeId = (bool) => {
    if (!bool && charId === 1) {
      return
    }
    const nextId = bool ? charId + 1 : charId - 1
    setCharId(nextId)
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
              <Image src={char.data.image} alt="char picture" priority width={300} height={300} />
              <S.InformationWrapper>
                <Subtitle className={'data-name'} label={char.data.name} />

                <S.SubWrapper>
                  <Subtitle2 label="Gender:" />
                  <Subtitle2 label={char.data.gender} />
                </S.SubWrapper>
                <S.SubWrapper>
                  <Subtitle2 label="Species:" />
                  <Subtitle2 label={char.data.species} />
                </S.SubWrapper>
                <S.SubWrapper>
                  <Subtitle2 label="Status:" />
                  <Subtitle2 label={char.data.status} />
                </S.SubWrapper>
                <S.SubWrapper>
                  <Subtitle2 label="Location:" />
                  <Subtitle2 label={char.data.location.name} />
                </S.SubWrapper>
                <S.SubWrapper>
                  <Subtitle2 label="Origin:" />
                  <Subtitle2 label={char.data.origin.name} />
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
          </>
        )}
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(RickAndMorty)
