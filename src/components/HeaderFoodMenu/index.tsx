import { Link } from 'react-router-dom'
import logo from '../../assets/efood-logo.png'
import { Content, HeaderContainer, CartButton } from './style'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

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
        <Link to="/">
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
