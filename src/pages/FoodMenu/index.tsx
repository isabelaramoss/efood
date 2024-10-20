import Banner from '../../components/Banner'
import HeaderFoodMenu from '../../components/HeaderFoodMenu'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FoodInfos } from '../Home'
import FoodMenuLists from '../../components/FoodMenuList'

const FoodMenu = () => {
  const { id } = useParams()
  const [menus, setMenus] = useState<FoodInfos>()
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setMenus(res))
  }, [id])

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
