import Tag from '../Tag'
import starIcon from '../../assets/star.png'

import * as S from './style'

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
    <S.FoodContainer>
      <img src={image} alt="#" />
      <S.TagContent className="tag">
        {tagInfos.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </S.TagContent>
      <S.InfoContent>
        <S.Infos>
          <h4>{title}</h4>
          <S.RatingContainer>
            <h4>{rating}</h4>
            <img src={starIcon} alt="Imagem estrela" />
          </S.RatingContainer>
        </S.Infos>
        <p>{getDescription(description)}</p>
        <S.Button
          title="Clique para saber mais sobre o restaurante"
          to={`/restaurantes/${id}`}
        >
          Saiba mais
        </S.Button>
      </S.InfoContent>
    </S.FoodContainer>
  )
}

export default FoodCard
