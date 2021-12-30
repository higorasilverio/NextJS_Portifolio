import styled from 'styled-components'

export const Header = styled.h1`
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Apple Color Emoji';
  font-weight: 900;
  color: ${({ theme }) => theme.pallete.blue[500]};
  font-size: ${({ theme }) => theme.rawSizes.xlm};
  line-height: 1;

  @media (min-width: 640px) {
    font-size: ${({ theme }) => theme.rawSizes.xxlm};
  }
`
