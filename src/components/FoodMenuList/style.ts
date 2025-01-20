import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const MenuListContainer = styled.section`
  padding: 32px 0;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
  }
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

export const FoodContainer = styled.li`
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

  h4 {
    font-size: 16px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 21px;
    margin: 8px 0;
  }
`

export const ButtonAdd = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 4px 107px;
  border: none;
  margin: 8px;
  margin-top: 0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

//Modal
export const Modal = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
  }
`

export const ModalContainer = styled.div`
  z-index: 1;
  width: 1024px;
  padding: 32px;
  background-color: ${colors.primary};
  display: flex;
  color: ${colors.white};
  gap: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }

  > div {
    img {
      width: 240px;
      height: 240px;
      object-fit: cover;

      @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
      }
    }
  }
`
export const Content = styled.div`
  h2 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;

    @media (max-width: ${breakpoints.mobile}) {
      text-align: center;
      font-size: 16px;
    }
  }

  p {
    line-height: 21px;
  }

  p,
  span {
    font-size: 14px;

    @media (max-width: ${breakpoints.mobile}) {
      text-align: center;
    }
  }

  span {
    margin: 16px 0;
    display: block;
  }

  ${ButtonAdd} {
    position: relative;
    margin: 0 auto;
    padding: 4px 8px;

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 100%;
      width: 100%;
    }
  }
`
export const CloseButton = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`
