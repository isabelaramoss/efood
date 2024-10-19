import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${colors.secondary};
  padding: 40px;
  text-align: center;
  margin-top: 72px;

  p {
    max-width: 784px;
    width: 100%;
    margin: 0 auto;
  }
`

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 32px 0 80px;

  a {
    text-decoration: none;
  }
`
