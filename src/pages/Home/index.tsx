import { useGetRestaurantsQuery } from '../../services/api'

import HeaderMain from '../../components/HeaderMain'
import FoodList from '../../components/FoodList'

export interface Cardapio {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

export type FoodInfos = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: FoodItems } = useGetRestaurantsQuery()

  if (FoodItems) {
    return (
      <>
        <HeaderMain />
        <FoodList items={FoodItems} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
