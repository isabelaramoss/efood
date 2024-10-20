import { BannerContainer, Content } from './style'
import { FoodInfos } from '../../pages/Home'

type Props = {
  bannerFood: FoodInfos
}

const Banner = ({ bannerFood }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${bannerFood.capa})` }}>
    <Content className="container">
      <span>{bannerFood.tipo}</span>
      <h1>{bannerFood.titulo}</h1>
    </Content>
  </BannerContainer>
)

export default Banner
