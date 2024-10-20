import closeIcon from '../../assets/close-icon.png'
import pizza from '../../assets/pizza.png'
import {
  ButtonAdd,
  FoodContainer,
  InfoContent,
  Modal,
  ModalContainer,
  Content,
  CloseButton
} from './style'

type Props = {
  image: string
  title: string
  description: string
  id: number
}

const MenuCard = ({ image, title, description }: Props) => (
  <>
    <FoodContainer>
      <img src={image} alt="" />
      <InfoContent>
        <h4>{title}</h4>
        <p>{description}</p>
      </InfoContent>
      <ButtonAdd>Mais detalhes</ButtonAdd>
    </FoodContainer>
    <Modal>
      <ModalContainer>
        <div>
          <img src={pizza} alt="Imagem comida" />
        </div>
        <Content>
          <h2>Pizza Marguerita</h2>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </p>
          <span>Serve: de 2 a 3 pessoas</span>
          <ButtonAdd>Adicionar ao carrinho - R$ 60,90</ButtonAdd>
        </Content>
        <CloseButton alt="Botão fechar" src={closeIcon} />
      </ModalContainer>
      <div className="overlay"></div>
    </Modal>
  </>
)
export default MenuCard
