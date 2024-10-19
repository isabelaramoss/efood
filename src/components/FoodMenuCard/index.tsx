import { ButtonAdd, Descr, FoodContainer, InfoContent, Title } from './style'
import img from '../../assets/pizza.png'

// type Props = {
//   image: string
//   title: string
//   description: string
//   id: number
// }

// const MenuCard = ({ image, title, description }: Props) => (
//   <FoodContainer>
//     <img src={image} alt="" />
//     <div className="infoContent">
//       <h4>{title}</h4>
//       <p className="descr">{description}</p>
//     </div>
//     <button>Adicionar ao carrinho</button>
//   </FoodContainer>
// )

const MenuCard = () => (
  <FoodContainer>
    <img src={img} alt="" />
    <InfoContent>
      <Title>Pizza Marguerita</Title>
      <Descr className="descr">
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descr>
    </InfoContent>
    <ButtonAdd>Adicionar ao carrinho</ButtonAdd>
  </FoodContainer>
)
export default MenuCard
