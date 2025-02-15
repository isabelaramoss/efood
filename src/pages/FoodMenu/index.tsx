import { useParams } from 'react-router-dom'

import { useGetRestaurantsByIdQuery } from '../../services/api'

import Banner from '../../components/Banner'
import HeaderFoodMenu from '../../components/HeaderFoodMenu'
import FoodMenuLists from '../../components/FoodMenuList'
import Loader from '../../components/Loader'

const FoodMenu = () => {
  const { id } = useParams()
  const { data: menus, isLoading } = useGetRestaurantsByIdQuery(id!)

  if (!menus) {
    return <Loader />
  }

  return (
    <>
      <HeaderFoodMenu />
      <Banner
        bannerFood={{
          id: menus.id,
          titulo: menus.titulo,
          destacado: menus.destacado,
          tipo: menus.tipo,
          avaliacao: menus.avaliacao,
          descricao: menus.descricao,
          capa: menus.capa,
          cardapio: []
        }}
      />
      <FoodMenuLists items={menus.cardapio} isLoading={isLoading} />
    </>
  )
}

export default FoodMenu
