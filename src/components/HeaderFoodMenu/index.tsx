import { Link } from 'react-router-dom'
import logo from '../../assets/efood-logo.png'
import { Content, HeaderContainer, CartButton } from './style'
import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const HeaderFoodMenu = () => {
  const dispatch = useDispatch()

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
        <CartButton onClick={openCart}>0 produto(s) no carrinho</CartButton>
      </Content>
    </HeaderContainer>
  )
}

export default HeaderFoodMenu
