import Food from '../../models/Food'
import FoodCard from '../FoodCard'
import { FoodListContainer, List } from './style'

export type Props = {
  items: Food[]
}

const FoodList = ({ items }: Props) => (
  <FoodListContainer>
    <div className="container">
      <List>
        {items.map((food) => (
          <FoodCard
            key={food.id}
            image={food.image}
            tagInfos={food.tagInfos}
            title={food.title}
            rating={food.rating}
            description={food.description}
            id={food.id}
          />
        ))}
      </List>
    </div>
  </FoodListContainer>
)

export default FoodList
