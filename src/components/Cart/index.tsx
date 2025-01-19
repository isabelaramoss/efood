import { ButtonAdd } from '../FoodMenuList/style'
import {
  ButtonDelete,
  CartContainer,
  CartItems,
  Overlay,
  Sidebar,
  TotalPrice
} from './style'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const priceFormat = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul className="margin-top">
          {items.map((item) => (
            <CartItems key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p className="price">{priceFormat(item.preco)}</p>
                <ButtonDelete onClick={() => removeItem(item.id)} />
              </div>
            </CartItems>
          ))}
        </ul>
        <TotalPrice>
          <h4>Valor total:</h4>
          <span>{priceFormat(getTotalPrice())}</span>
        </TotalPrice>
        <ButtonAdd>Continuar com a entrega</ButtonAdd>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
