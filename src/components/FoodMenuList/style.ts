import styled from 'styled-components'
import { Props } from '.'
import { breakpoints } from '../../styles'

export const MenuListContainer = styled.section<Omit<Props, 'items'>>`
  padding: 32px o;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
