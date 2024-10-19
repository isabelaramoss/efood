import { ButtonAdd, Descr, FoodContainer, InfoContent, Title } from './style'

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
      <Title>{title}</Title>
      <Descr>{description}</Descr>
    </InfoContent>
    <ButtonAdd>Adicionar ao carrinho</ButtonAdd>
  </FoodContainer>
)
export default MenuCard
