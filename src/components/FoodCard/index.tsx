import Tag from '../Tag'
import starIcon from '../../assets/star.png'

import {
  FoodContainer,
  TagContent,
  InfoContent,
  Infos,
  RatingContainer,
  Button
} from './style'

type Props = {
  image: string
  tagInfos: string[]
  title: string
  rating: number
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
}: Props) => {
  const getDescription = (descr: string) => {
    if (descr.length > 160) {
      return descr.slice(0, 157) + '...'
    }
    return descr
  }
  return (
    <FoodContainer>
      <img src={image} alt="#" />
      <TagContent className="tag">
        {tagInfos.map((t) => (
          <Tag key={t}>{t}</Tag>
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
        <p>{getDescription(description)}</p>
        <Button
          title="Clique para saber mais sobre o restaurante"
          to={`/restaurantes/${id}`}
        >
          Saiba mais
        </Button>
      </InfoContent>
    </FoodContainer>
  )
}

export default FoodCard
