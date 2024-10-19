import { ButtonAdd, FoodContainer, InfoContent } from './style'

type Props = {
  image: string
  title: string
  description: string
  id: number
}

const MenuCard = ({ image, title, description }: Props) => (
  <FoodContainer>
    <img src={image} alt="" />
    <InfoContent>
      <h4>{title}</h4>
      <p>{description}</p>
    </InfoContent>
    <ButtonAdd>Adicionar ao carrinho</ButtonAdd>
  </FoodContainer>
)
export default MenuCard
