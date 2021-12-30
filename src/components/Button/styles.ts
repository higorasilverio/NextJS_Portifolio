import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 14rem;
  font-weight: 700;
  color: ${({ theme }) => theme.pallete.blue[500]};
  background-color: ${({ theme }) => theme.pallete.blue[100]};
  border-width: ${({ theme }) => theme.rawSizes.xs};
  border-color: ${({ theme }) => theme.pallete.blue[500]};
  border-style: solid;
  border-radius: ${({ theme }) => theme.rawSizes.sm};
  padding-top: ${({ theme }) => theme.rawSizes.sm};
  padding-bottom: ${({ theme }) => theme.rawSizes.sm};
  margin-top: ${({ theme }) => theme.rawSizes.xs};
  margin-bottom: ${({ theme }) => theme.rawSizes.xs};
  font-size: ${({ theme }) => theme.rawSizes.lg};
  line-height: ${({ theme }) => theme.rawSizes.lg};

  @media (min-width: 640px) {
    font-size: ${({ theme }) => theme.rawSizes.lg};
    line-height: ${({ theme }) => theme.rawSizes.xl};
  }
`
