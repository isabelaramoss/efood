import styled from 'styled-components'
import { Props } from '.'
import { breakpoints } from '../../styles'

export const FoodListContainer = styled.section<Omit<Props, 'items'>>`
  padding: 32px 0;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 8px 0;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  margin-top: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
