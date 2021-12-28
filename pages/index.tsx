import styled from 'styled-components'

const Button = styled.button`
  font-size: ${(props) => props.theme.fontSize.md};
  margin: ${(props) => props.theme.fontSize.xl};
  padding: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.pallete.success[100]};
  border: 2px solid ${(props) => props.theme.pallete.success[500]};
  border-radius: 10px;
`

const Header = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  margin: ${(props) => props.theme.fontSize.xl};
`

export default function Home() {
  return (
    <div className='flex content-center'>
      <Header>Hello world!</Header>
      <Button>Themed</Button>
    </div>
  )
}
