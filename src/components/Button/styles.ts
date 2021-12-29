import styled from 'styled-components'

export const StyledButton = styled.button`
  font-weight: 700;
  color: ${(props) => props.theme.pallete.blue[500]};
  background-color: ${(props) => props.theme.pallete.blue[100]};
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.pallete.blue[500]};
  border-radius: 0.5rem;
  width: 14rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;

  @media (min-width: 640px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`
