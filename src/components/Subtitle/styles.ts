import styled from 'styled-components'

export const Text = styled.span`
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Apple Color Emoji';
  font-weight: 700;
  color: ${({ theme }) => theme.pallete.grey[800]};
  font-size: ${({ theme }) => theme.rawSizes.xl};
  line-height: 1;

  --hgo-grad-min: ${({ theme }) => theme.pallete.grey[500]};
  --hgo-grad-max: ${({ theme }) => theme.pallete.grey[800]};

  background: -webkit-linear-gradient(
    125deg,
    var(--hgo-grad-max),
    var(--hgo-grad-min),
    var(--hgo-grad-max)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
