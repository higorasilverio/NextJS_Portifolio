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
    border-radius: ${({ theme }) => theme.rawSizes.md};
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
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    width: 100%;
  }
`

export const SideGrid = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Action = styled.div`
  width: 250px;
  height: ${({ theme }) => theme.rawSizes.try};

  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  --hgo-grad-min: ${({ theme }) => theme.pallete.blue[500]};
  --hgo-grad-max: ${({ theme }) => theme.pallete.blue[800]};

  border-radius: ${({ theme }) => theme.rawSizes.sm};
  border: solid 3px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    linear-gradient(125deg, var(--hgo-grad-max), var(--hgo-grad-min), var(--hgo-grad-max));
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;

  &:hover {
    box-shadow: none;
  }

  @media (max-width: 1400px) {
    margin-top: ${({ theme }) => theme.rawSizes.xs};
  }
`
