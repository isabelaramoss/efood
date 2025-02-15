import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'

import { RootReducer } from '../../store'

import logo from '../../assets/efood-logo.png'
import { Content, HeaderContainer, CartButton } from './style'

const HeaderFoodMenu = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <Content className="container">
        <h3>Restaurantes</h3>
        <Link title="eFood | Clique para ir à página inicial" to="/">
          <img src={logo} alt="Logo eFood" />
        </Link>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </Content>
    </HeaderContainer>
  )
}

export default HeaderFoodMenu
