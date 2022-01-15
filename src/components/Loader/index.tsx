import styled, { keyframes } from 'styled-components'
import { memo } from 'react'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoaderCSS = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotate} 2s linear infinite;
`

const Loader = () => {
  return <LoaderCSS />
}

export default memo(Loader)
