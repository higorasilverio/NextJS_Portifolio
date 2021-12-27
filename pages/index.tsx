import styled, { ThemeProvider } from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`

Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
}

const theme = {
  main: 'mediumseagreen',
}

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Button>Normal</Button>

      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
  )
}
