declare interface Cardapio {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

declare type FoodInfos = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}
