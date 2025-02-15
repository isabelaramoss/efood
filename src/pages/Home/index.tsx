import { useGetRestaurantsQuery } from '../../services/api'

import HeaderMain from '../../components/HeaderMain'
import FoodList from '../../components/FoodList'

const Home = () => {
  const { data: FoodItems, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <HeaderMain />
      <FoodList items={FoodItems} isLoading={isLoading} />
    </>
  )
}

export default Home
