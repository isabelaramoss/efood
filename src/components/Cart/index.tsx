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

const Cart = () => (
  <CartContainer>
    <Overlay />
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

export default Cart
