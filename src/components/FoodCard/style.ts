import styled from 'styled-components'
import { colors } from '../../styles'

export const FoodContainer = styled.div`
  max-width: 472px;
  width: 100%;
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  border-top: none;
  position: relative;

  > img {
    width: 100%;
    height: 224px;
    max-height: 100%;
  }
`
export const TagContent = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const InfoContent = styled.div`
  padding: 8px;
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Descr = styled.p`
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 32px;
`

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.beige};
  padding: 4px 6px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  bottom: 8px;
  left: 8px;
  border: none;
`
