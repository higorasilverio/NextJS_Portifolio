import styled from 'styled-components'

export const Text = styled.span`
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Apple Color Emoji';
  font-weight: 700;
  font-size: ${({ theme }) => theme.rawSizes.md};
  color: ${({ theme }) => theme.pallete.grey[700]};

  @media (min-width: 640px) {
    font-size: ${({ theme }) => theme.rawSizes.lg};
  }
`
