import styled from 'styled-components'

export const Grid = styled.div`
  width: 100%;
  height: 80%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: ${({ theme }) => theme.rawSizes.md};
  place-items: center;
  place-content: center;
`
