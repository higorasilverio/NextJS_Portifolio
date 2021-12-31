import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 14rem;
  font-weight: 700;
  color: ${({ theme }) => theme.pallete.blue[800]};
  border-width: 4px;
  border-color: ${({ theme }) => theme.pallete.blue[500]};
  border-style: solid;
  border-radius: ${({ theme }) => theme.rawSizes.sm};
  padding-top: ${({ theme }) => theme.rawSizes.sm};
  padding-bottom: ${({ theme }) => theme.rawSizes.sm};
  margin-top: ${({ theme }) => theme.rawSizes.xs};
  margin-bottom: ${({ theme }) => theme.rawSizes.xs};
  font-size: ${({ theme }) => theme.rawSizes.lg};
  line-height: ${({ theme }) => theme.rawSizes.lg};

  --hgo-grad-light: ${({ theme }) => theme.pallete.light[100]};
  --hgo-grad-min: ${({ theme }) => theme.pallete.blue[500]};
  --hgo-grad-max: ${({ theme }) => theme.pallete.blue[800]};

  border: solid 3px transparent;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), 
    linear-gradient(125deg, var(--hgo-grad-max), var(--hgo-grad-min), var(--hgo-grad-max));
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;

  display: flex;
  flex-direction; row;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction; row;
    justify-content: space-around;
    align-items: center;
  }

  span {
    background: -webkit-linear-gradient(
    125deg,
    var(--hgo-grad-max),
    var(--hgo-grad-min),
    var(--hgo-grad-max)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  &:hover {
    box-shadow: none;
    color: white;

    span {
    background: var(--hgo-grad-light);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
  }

  @media (min-width: 640px) {
    font-size: ${({ theme }) => theme.rawSizes.lg};
    line-height: ${({ theme }) => theme.rawSizes.xl};
  }
`
