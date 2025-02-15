import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import { Cardapio } from '../../pages/Home'

import closeIcon from '../../assets/close-icon.png'
import * as S from './style'
import Loader from '../Loader'

interface modalState extends Cardapio {
  isVisible: boolean
}

type FoodItems = {
  items: Cardapio[]
  isLoading: boolean
}

const FoodMenuList = ({ items, isLoading }: FoodItems) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<modalState>({
    isVisible: false,
    id: 0,
    foto: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: 0
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      id: 0,
      foto: '',
      nome: '',
      descricao: '',
      porcao: '',
      preco: 0
    })
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 100) {
      return descricao.slice(0, 97) + '...'
    }
    return descricao
  }

  const addToCart = () => {
    dispatch(add(modal))
    dispatch(open())
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.MenuListContainer>
        <div className="container">
          <S.List>
            {items.map((food) => (
              <S.FoodContainer key={food.id}>
                <img src={food.foto} alt="" />
                <S.InfoContent>
                  <h4>{food.nome}</h4>
                  <p>{getDescription(food.descricao)}</p>
                </S.InfoContent>
                <S.ButtonAdd
                  onClick={() => {
                    setModal({
                      isVisible: true,
                      id: food.id,
                      foto: food.foto,
                      nome: food.nome,
                      descricao: food.descricao,
                      porcao: food.porcao,
                      preco: food.preco
                    })
                  }}
                  title={`Clique para saber mais detalhes sobre ${food.nome}`}
                >
                  Mais detalhes
                </S.ButtonAdd>
              </S.FoodContainer>
            ))}
          </S.List>
        </div>
      </S.MenuListContainer>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContainer>
          <div>
            <img src={modal.foto} alt="Imagem comida" />
          </div>
          <S.Content>
            <h2>{modal.nome}</h2>
            <p>{modal.descricao}</p>
            <span>Serve: {modal.porcao}</span>
            <S.ButtonAdd onClick={addToCart}>
              Adicionar ao carrinho - {parseToBrl(modal.preco)}
            </S.ButtonAdd>
          </S.Content>
          <S.CloseButton
            alt="Botão fechar"
            src={closeIcon}
            onClick={closeModal}
          />
        </S.ModalContainer>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}
export default FoodMenuList
