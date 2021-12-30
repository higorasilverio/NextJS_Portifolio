import styled from 'styled-components'

export const Container = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.pallete.light[100]};
  border-radius: ${({ theme }) => theme.rawSizes.md};

  @media (min-width: 640px) {
    width: 75%;
    height: 70%;
  }
`
