import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  --hgo-grad-min: ${(props) => props.theme.pallete.blue[100]};
  --hgo-grad-max: ${(props) => props.theme.pallete.blue[300]};
  --hgo-grad-stops: var(--hgo-grad-max), var(--hgo-grad-min), var(--hgo-grad-max);
  background-image: linear-gradient(to right, var(--hgo-grad-stops));
`
