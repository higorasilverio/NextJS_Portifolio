import axios from 'axios'
import { isEmpty } from 'lodash'
import { useState } from 'react'

interface IError {
  message: string
  state: boolean
}

export function useRequest() {
  const [loading, setLoading] = useState<boolean>(true)
  const [char, setChar] = useState(null)
  const [error, setError] = useState<IError>({ message: '', state: false })

  const getCharacter = async (_id = null, _search = null) => {
    setError({ message: '', state: false })
    setLoading(true)
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
      .finally(() => {
        setLoading(false)
      })
  }

  return { loading, char, error, getCharacter }
}
