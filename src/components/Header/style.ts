import styled from 'styled-components'
import backgroundImg from '../../assets/bg-img.png'
import { breakpoints } from '../../styles'

export const HeaderBar = styled.header`
  text-align: center;
  background-image: url(${backgroundImg});
  margin-bottom: 80px;
  padding: 40px;
`

export const HeaderTitle = styled.h3`
  font-size: 36px;
  font-weight: bold;
  line-height: 54px;
  width: 540px;
  margin: 136px auto 0;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
    margin-top: 112px;
  }
`
