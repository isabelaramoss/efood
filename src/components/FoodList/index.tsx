import FoodCard from '../FoodCard'
import { FoodInfos } from '../../pages/Home'

import * as S from './style'

export type Props = {
  items: FoodInfos[]
}

const FoodList = ({ items }: Props) => {
  const getTags = (food: FoodInfos) => {
    const tags = []

    if (food.destacado) {
      tags.push('Destaque da semana')
    }

    if (food.tipo) {
      tags.push(food.tipo)
    }

    return tags
  }

  return (
    <S.FoodListContainer>
      <div className="container">
        <S.List>
          {items.map((food) => (
            <FoodCard
              key={food.id}
              image={food.capa}
              tagInfos={getTags(food)}
              title={food.titulo}
              rating={food.avaliacao}
              description={food.descricao}
              id={food.id}
            />
          ))}
        </S.List>
      </div>
    </S.FoodListContainer>
  )
}

export default FoodList
