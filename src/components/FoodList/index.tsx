import { FoodInfos } from '../../pages/Home'
import FoodCard from '../FoodCard'
import { FoodListContainer, List } from './style'

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
    <FoodListContainer>
      <div className="container">
        <List>
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
        </List>
      </div>
    </FoodListContainer>
  )
}

export default FoodList
