import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 1;
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: ${({ theme }) => theme.rawSizes.xs};
  left: ${({ theme }) => theme.rawSizes.xs};
  border-radius: 30px;
  background: ${({ theme }) => theme.pallete.light[100]};

  --hgo-grad-min: ${({ theme }) => theme.pallete.grey[100]};
  --hgo-grad-max: ${({ theme }) => theme.pallete.grey[800]};

  border: solid 3px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    linear-gradient(125deg, var(--hgo-grad-max), var(--hgo-grad-min), var(--hgo-grad-max));
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: none;
    color: white;

    a {
      color: ${({ theme }) => theme.pallete.blue[800]};
    }
  }
`

export const Navigator = styled.a`
  font-size: ${({ theme }) => theme.rawSizes.lg};
  margin-top: ${({ theme }) => theme.rawSizes.xxs};
  color: ${({ theme }) => theme.pallete.blue[800]};
`
