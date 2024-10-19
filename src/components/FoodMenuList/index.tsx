import MenuFood from '../../models/MenuFood'
import MenuCard from '../FoodMenuCard'
import { List, MenuListContainer } from './style'

export type Props = {
  items: MenuFood[]
}

const MenuList = ({ items }: Props) => (
  <MenuListContainer>
    <div className="container">
      <List>
        {items.map((food) => (
          <MenuCard
            key={food.id}
            image={food.image}
            title={food.title}
            description={food.description}
            id={food.id}
          />
        ))}
      </List>
    </div>
  </MenuListContainer>
)

export default MenuList
