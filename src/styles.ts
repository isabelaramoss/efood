import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E66767',
  secondary: '#FFEBD9',
  beige: '#FFF8F2',
  white: '#FFF'
}

export const breakpoints = {
  desktop: '1024px',
  mobile: '768px'
}

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    background-color: ${colors.beige};
    color: ${colors.primary};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}){
      max-width: 80%
    }
  }
`
