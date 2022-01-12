import { Button, HomeButton, Paper, Subtitle, Title, Wrapper } from '@components/index'
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
            <Image
              src={char.data.image}
              alt="picture of the author"
              priority
              width={300}
              height={300}
            />
            <button type="button" onClick={() => handleChangeId(true)}>
              +
            </button>
            <button type="button" onClick={() => handleChangeId(false)}>
              -
            </button>
          </>
        )}
      </Paper>
      <HomeButton />
    </Wrapper>
  )
}

export default memo(RickAndMorty)
