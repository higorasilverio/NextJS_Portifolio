import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  --hgo-grad-min: ${({ theme }) => theme.pallete.blue[500]};
  --hgo-grad-max: ${({ theme }) => theme.pallete.blue[800]};
  --hgo-grad-stops: var(--hgo-grad-max), var(--hgo-grad-min), var(--hgo-grad-min),
    var(--hgo-grad-max);
  background-image: linear-gradient(105deg, var(--hgo-grad-stops));
`
