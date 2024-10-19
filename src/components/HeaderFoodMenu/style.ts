import styled from 'styled-components'
import { breakpoints } from '../../styles'
import backgroundImg from '../../assets/bg-img.png'

export const HeaderContainer = styled.div`
  background-image: url(${backgroundImg});
  padding: 40px 0 64px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0 auto;
  }
`
