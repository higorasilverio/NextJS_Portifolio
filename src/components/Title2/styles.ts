import styled from 'styled-components'

export const Header = styled.h2`
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Apple Color Emoji';
  font-weight: 900;
  color: ${({ theme }) => theme.pallete.blue[800]};
  font-size: ${({ theme }) => theme.rawSizes.xl};
  line-height: 1;
  margin: 0;

  --hgo-grad-min: ${({ theme }) => theme.pallete.blue[500]};
  --hgo-grad-max: ${({ theme }) => theme.pallete.blue[800]};

  background: -webkit-linear-gradient(
    125deg,
    var(--hgo-grad-max),
    var(--hgo-grad-min),
    var(--hgo-grad-max)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 640px) {
    font-size: ${({ theme }) => theme.rawSizes.xxl};
  }
`
