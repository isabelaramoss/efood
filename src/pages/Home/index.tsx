import Food from '../../models/Food'
import japonesa from '../../assets/sushi.png'
import italiana from '../../assets/pasta.png'
import FoodList from '../../components/FoodList'
import HeaderMain from '../../components/HeaderMain'

const main: Food[] = [
  {
    image: japonesa,
    tagInfos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    rating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  },
  {
    image: italiana,
    tagInfos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 2
  },
  {
    image: italiana,
    tagInfos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 3
  },
  {
    image: italiana,
    tagInfos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 4
  },
  {
    image: italiana,
    tagInfos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 5
  },
  {
    image: italiana,
    tagInfos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 6
  }
]

const Home = () => (
  <>
    <HeaderMain />
    <FoodList items={main} />
  </>
)

export default Home
