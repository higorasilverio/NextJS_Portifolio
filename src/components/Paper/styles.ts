import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.pallete.light[100]};
  border-radius: 1.5rem;
  width: 85%;
  height: 85%;

  @media (min-width: 640px) {
    width: 75%;
    height: 70%;
  }
`
