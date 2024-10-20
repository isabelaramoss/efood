import { useEffect, useState } from 'react'
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
  const [FoodItems, setFoodItems] = useState<FoodInfos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setFoodItems(res))
  }, [])

  return (
    <>
      <HeaderMain />
      <FoodList items={FoodItems} />
    </>
  )
}

export default Home
