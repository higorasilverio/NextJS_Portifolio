import styled from 'styled-components'

export const MainGrid = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const LeftSide = styled.div`
  width: 28.5%;
  max-width: 400px;
  min-width: 300px;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    border-radius: ${({ theme }) => theme.rawSizes.lg};
  }

  @media (max-width: 1400px) {
    display: none;
  }
`

export const RightSide = styled.div`
  width: 68.5%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const TitleGrid = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Field = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
