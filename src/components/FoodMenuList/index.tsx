import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import { Cardapio } from '../../pages/Home'

import closeIcon from '../../assets/close-icon.png'
import {
  MenuListContainer,
  List,
  ButtonAdd,
  FoodContainer,
  InfoContent,
  Modal,
  ModalContainer,
  Content,
  CloseButton
} from './style'

interface modalState extends Cardapio {
  isVisible: boolean
}

type FoodItems = {
  items: Cardapio[]
}

const FoodMenuList = ({ items }: FoodItems) => {
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

  return (
    <>
      <MenuListContainer>
        <div className="container">
          <List>
            {items.map((food) => (
              <FoodContainer key={food.id}>
                <img src={food.foto} alt="" />
                <InfoContent>
                  <h4>{food.nome}</h4>
                  <p>{getDescription(food.descricao)}</p>
                </InfoContent>
                <ButtonAdd
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
                </ButtonAdd>
              </FoodContainer>
            ))}
          </List>
        </div>
      </MenuListContainer>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContainer>
          <div>
            <img src={modal.foto} alt="Imagem comida" />
          </div>
          <Content>
            <h2>{modal.nome}</h2>
            <p>{modal.descricao}</p>
            <span>Serve: {modal.porcao}</span>
            <ButtonAdd onClick={addToCart}>
              Adicionar ao carrinho - {parseToBrl(modal.preco)}
            </ButtonAdd>
          </Content>
          <CloseButton
            alt="Botão fechar"
            src={closeIcon}
            onClick={closeModal}
          />
        </ModalContainer>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}
export default FoodMenuList
