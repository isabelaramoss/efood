import styled from 'styled-components'
import { Props } from '.'

export const FoodListContainer = styled.section<Omit<Props, 'items'>>`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  margin-top: 48px;
`
