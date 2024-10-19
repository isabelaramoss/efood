import Tag from '../Tag'
import starIcon from '../../assets/star.png'

import {
  FoodContainer,
  TagContent,
  InfoContent,
  Infos,
  RatingContainer,
  Descr,
  Button
} from './style'

type Props = {
  image: string
  tagInfos: string[]
  title: string
  rating: string
  description: string
  id: number
}

const FoodCard = ({
  image,
  tagInfos,
  title,
  rating,
  description,
  id
}: Props) => (
  <FoodContainer>
    <img src={image} alt="#" />
    <TagContent className="tag">
      {tagInfos.map((t) => (
        <Tag key={id}>{t}</Tag>
      ))}
    </TagContent>
    <InfoContent>
      <Infos>
        <h4>{title}</h4>
        <RatingContainer>
          <h4>{rating}</h4>
          <img src={starIcon} alt="Imagem estrela" />
        </RatingContainer>
      </Infos>
      <Descr>{description}</Descr>
      <Button>Saiba mais</Button>
    </InfoContent>
  </FoodContainer>
)

export default FoodCard
