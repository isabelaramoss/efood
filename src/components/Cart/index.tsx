import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { parseToBrl } from '../../utils'
import { RootReducer } from '../../store'
import {
  close,
  remove,
  nextStep,
  prevStep,
  setStep,
  clear
} from '../../store/reducers/cart'

import closeIcon from '../../assets/close-icon.png'

import { ButtonAdd, CloseButton } from '../FoodMenuList/style'
import * as S from './style'

const Cart = () => {
  const { isOpen, items, step } = useSelector(
    (state: RootReducer) => state.cart
  )

  const [purchase, { data, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, currentItem) => {
      return (acumulador += currentItem.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      streetAddress: '',
      city: '',
      cep: '',
      addressNumber: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres.')
        .required('O campo é obrigatório.'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter 9 caracteres.')
        .max(9, 'O campo precisa ter 9 caracteres.')
        .required('O campo é obrigatório.'),
      streetAddress: Yup.string()
        .min(6, 'Endereço inválido')
        .required('O campo é obrigatório.'),
      city: Yup.string()
        .min(5, 'Cidade inválida')
        .required('O campo é obrigatório.'),
      addressNumber: Yup.string().min(2).required('O campo é obrigatório.'),
      complement: Yup.string().min(5, 'O campo precisa ter 5 caracteres.'),
      cardDisplayName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres.')
        .required('O campo é obrigatório.'),
      cardNumber: Yup.string()
        .max(23, 'O campo precisa seguir o modelo mostrado.')
        .required('O campo é obrigatório.'),
      expiresMonth: Yup.string()
        .min(1, 'O campo precisa ter 2 caracteres.')
        .max(2, 'O campo precisa ter 2 caracteres.')
        .required('O campo é obrigatório.'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres.')
        .max(2, 'O campo precisa ter 2 caracteres.')
        .required('O campo é obrigatório.'),
      cardCode: Yup.string()
        .min(2, 'O campo precisa ter 3 caracteres.')
        .max(3, 'O campo precisa ter 3 caracteres.')
        .required('O campo é obrigatório.')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.streetAddress,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const getError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const validateStep = async (fields: string[]) => {
    const errors = await form.validateForm()

    form.setTouched(
      fields.reduce((acc, field) => ({ ...acc, [field]: true }), {}),
      true
    )

    const hasErrors = fields.some(
      (field) => errors[field as keyof typeof form.errors]
    )

    return hasErrors
  }

  const finalizeOrder = () => {
    return (
      dispatch(setStep(1)),
      dispatch(clear()),
      dispatch(close()),
      form.resetForm()
    )
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.type !== 'number') {
      e.target.selectionStart = e.target.value.length
    }
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <CloseButton alt="Botão fechar" src={closeIcon} onClick={closeCart} />
          {items.length > 0 ? (
            <>
              {step === 1 && (
                <>
                  <ul className="margin-top">
                    {items.map((item) => (
                      <S.CartItems key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                          <h3>{item.nome}</h3>
                          <p className="price">{parseToBrl(item.preco)}</p>
                          <S.ButtonDelete onClick={() => removeItem(item.id)} />
                        </div>
                      </S.CartItems>
                    ))}
                  </ul>
                  <S.TotalPrice>
                    <h4>Valor total:</h4>
                    <span>{parseToBrl(getTotalPrice())}</span>
                  </S.TotalPrice>
                  <ButtonAdd onClick={() => dispatch(nextStep())} type="button">
                    Continuar com a entrega
                  </ButtonAdd>
                </>
              )}

              {step === 2 && (
                <>
                  <S.Delivery>
                    <h3>Entrega</h3>
                    <div>
                      <label htmlFor="fullName">Quem irá receber</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('fullName') ? 'error' : ''}
                      />
                    </div>
                    <div>
                      <label htmlFor="streetAddress">Endereço</label>
                      <input
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        value={form.values.streetAddress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('streetAddress') ? 'error' : ''}
                      />
                    </div>
                    <div>
                      <label htmlFor="city">Cidade</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('city') ? 'error' : ''}
                      />
                    </div>
                    <div className="side-x-side">
                      <div>
                        <label htmlFor="cep">CEP</label>
                        <InputMask
                          type="text"
                          name="cep"
                          id="cep"
                          value={form.values.cep}
                          onChange={(e) => {
                            form.setFieldValue('cep', e.target.value)
                            form.setFieldTouched('cep', true)
                          }}
                          onBlur={form.handleBlur}
                          className={getError('cep') ? 'error' : ''}
                          mask="99999-999"
                          onFocus={handleFocus}
                        />
                      </div>
                      <div>
                        <label htmlFor="addressNumber">Número</label>
                        <input
                          type="number"
                          name="addressNumber"
                          id="addressNumber"
                          value={form.values.addressNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={getError('addressNumber') ? 'error' : ''}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="complement">Complemento (opcional)</label>
                      <input
                        type="text"
                        name="complement"
                        id="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </div>

                    <div className="buttons">
                      <S.ButtonDelivery
                        onClick={async () => {
                          const isStep1Valid = await validateStep([
                            'fullName',
                            'streetAddress',
                            'city',
                            'cep',
                            'addressNumber'
                          ])

                          if (!isStep1Valid) {
                            dispatch(nextStep())
                          } else {
                            alert(
                              'Por favor, corrija as informações antes de continuar.'
                            )
                          }
                        }}
                        type="submit"
                      >
                        Continuar com o pagamento
                      </S.ButtonDelivery>
                      <S.ButtonDelivery
                        onClick={() => dispatch(prevStep())}
                        type="button"
                      >
                        Voltar para o carrinho
                      </S.ButtonDelivery>
                    </div>
                  </S.Delivery>
                </>
              )}

              {step === 3 && (
                <>
                  <S.Delivery>
                    <h3>
                      Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}
                    </h3>
                    <div>
                      <label htmlFor="cardDisplayName">Nome no cartão</label>
                      <input
                        type="text"
                        name="cardDisplayName"
                        id="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('cardDisplayName') ? 'error' : ''}
                      />
                    </div>
                    <div className="address-numbers">
                      <div>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          type="number"
                          name="cardNumber"
                          id="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={getError('cardNumber') ? 'error' : ''}
                        />
                      </div>
                      <div>
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="number"
                          name="cardCode"
                          id="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={getError('cardCode') ? 'error' : ''}
                        />
                      </div>
                    </div>
                    <div className="address-numbers">
                      <div>
                        <label htmlFor="expiresMonth">Mês do vencimento</label>
                        <input
                          type="number"
                          name="expiresMonth"
                          id="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={getError('expiresMonth') ? 'error' : ''}
                        />
                      </div>
                      <div>
                        <label htmlFor="expiresYear">Ano do vencimento</label>
                        <input
                          type="number"
                          name="expiresYear"
                          id="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={getError('expiresYear') ? 'error' : ''}
                        />
                      </div>
                    </div>
                    <div className="buttons">
                      <S.ButtonDelivery
                        onClick={async () => {
                          const isStep2Valid = await validateStep([
                            'cardDisplayName',
                            'cardNumber',
                            'cardNumber',
                            'expiresMonth',
                            'expiresYear'
                          ])

                          if (!isStep2Valid) {
                            dispatch(nextStep(), form.handleSubmit())
                          } else {
                            alert(
                              'Por favor, corrija as informações antes de finalizar pagamento.'
                            )
                          }
                        }}
                        type="submit"
                        title="Clique para finalizar pagamento"
                        disabled={isLoading}
                      >
                        {isLoading
                          ? 'Finalizando compra...'
                          : 'Finalizar pagamento'}
                      </S.ButtonDelivery>
                      <S.ButtonDelivery
                        onClick={() => dispatch(prevStep())}
                        type="button"
                      >
                        Voltar para a edição de endereço
                      </S.ButtonDelivery>
                    </div>
                  </S.Delivery>
                </>
              )}

              {step === 4 && (
                <>
                  <S.Delivery>
                    <h3>Pedido realizado - {data?.orderId}</h3>
                    <p>
                      Estamos felizes em informar que seu pedido já está em
                      processo de preparação e, em breve, será entregue no
                      endereço fornecido.
                    </p>
                    <p>
                      Gostaríamos de ressaltar que nossos entregadores não estão
                      autorizados a realizar cobranças extras.
                    </p>
                    <p>
                      Lembre-se da importância de higienizar as mãos após o
                      recebimento do pedido, garantindo assim sua segurança e
                      bem-estar durante a refeição.
                    </p>
                    <p>
                      Esperamos que desfrute de uma deliciosa e agradável
                      experiência gastronômica. Bom apetite!
                    </p>
                    <S.ButtonDone
                      type="submit"
                      to={'/'}
                      onClick={finalizeOrder}
                    >
                      Concluir
                    </S.ButtonDone>
                  </S.Delivery>
                </>
              )}
            </>
          ) : (
            <p className="emptyCart">
              O carrinho está vazio! Adicione ao menos um produto para continuar
              com a compra.
            </p>
          )}
        </S.Sidebar>
      </S.CartContainer>
    </form>
  )
}

export default Cart
