import styled from 'styled-components'

export const Header = styled.h1`
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Apple Color Emoji';
  font-weight: 900;
  color: ${(props) => props.theme.pallete.blue[500]};
  font-size: 3rem;
  line-height: 1;

  @media (min-width: 640px) {
    font-size: 6rem;
    line-height: 1;
  }
`
