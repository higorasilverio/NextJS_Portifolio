import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ color }) => color};
  font-size: ${({ size }) => size};

  &:hover {
    color: ${({ theme }) => theme.pallete.light[100]};
  }
`
