import styled from 'styled-components'
import { colors } from '../../styles'
// import { Link } from "react-router-dom"

export const FoodContainer = styled.div`
  max-width: 320px;
  width: 100%;
  background-color: ${colors.primary};
  margin-bottom: 48px;
  border: none;

  > img {
    width: 100%;
    height: 168px;
    max-height: 100%;
    padding: 8px;
  }
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.secondary};
  padding: 8px;
  padding-top: 0;
  width: 100%;
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 900;
`
export const Descr = styled.p`
  font-size: 14px;
  line-height: 21px;
  margin: 8px 0;
`

export const ButtonAdd = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 4px 84px;
  border: none;
  margin: 8px;
  margin-top: 0;
  font-size: 14px;
  font-weight: bold;
`
