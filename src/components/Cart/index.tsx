import { ButtonAdd } from '../FoodMenuList/style'
import {
  ButtonDelete,
  CartContainer,
  CartItems,
  Overlay,
  Sidebar,
  TotalPrice
} from './style'
import Star from '../../assets/star.png'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul className="margin-top">
          <CartItems>
            <img src={Star} alt="" />
            <div>
              <h3>Nome prato</h3>
              <p className="price">R$ 60,90</p>
              <ButtonDelete />
            </div>
          </CartItems>

          <CartItems>
            <img src={Star} alt="" />
            <div>
              <h3>Nome prato</h3>
              <p className="price">R$ 60,90</p>
              <ButtonDelete />
            </div>
          </CartItems>
        </ul>
        <TotalPrice>
          <h4>Valor total:</h4>
          <span>R$182,70</span>
        </TotalPrice>
        <ButtonAdd>Continuar com a entrega</ButtonAdd>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
