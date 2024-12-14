import styled from 'styled-components'
import { colors } from '../../styles'
import Delete from '../../assets/delete-icon.png'
import { ButtonAdd } from '../FoodMenuList/style'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  display: none;
  justify-content: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  z-index: 1;
  max-width: 360px;
  width: 100%;

  .margin-top {
    margin-top: 32px;
  }

  ${ButtonAdd} {
    padding: 4px 94px;
    max-width: 100%;
  }
`

export const CartItems = styled.li`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 8px;
  margin: 16px 8px;
  display: flex;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    display: block;
    margin-left: 8px;

    .price {
      margin-top: 16px;
      margin-bottom: 8px;
    }
  }
`

export const ButtonDelete = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 16px;
  border: none;
  height: 16px;
  background-image: url(${Delete});
  background-color: transparent;
  cursor: pointer;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  margin: 40px 0 16px;
  padding: 0 8px;
`
