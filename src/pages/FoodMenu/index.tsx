import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import HeaderFoodMenu from '../../components/HeaderFoodMenu'
import FoodMenuLists from '../../components/FoodMenuList'
import { useGetRestaurantsByIdQuery } from '../../services/api'

const FoodMenu = () => {
  const { id } = useParams()
  const { data: menus } = useGetRestaurantsByIdQuery(id!)

  if (!menus) {
    return <h3>Carregando...</h3>
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
      <FoodMenuLists items={menus.cardapio} />
    </>
  )
}

export default FoodMenu
