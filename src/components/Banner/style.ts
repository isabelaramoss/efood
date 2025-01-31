import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const BannerContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 320px;
  display: block;
  position: relative;
  margin-bottom: 56px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 160px;
  padding: 24px 0;
  font-size: 32px;
  color: ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }

  h1,
  span {
    z-index: 1;
  }

  span {
    font-weight: 100;
  }
`
