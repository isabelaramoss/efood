import * as S from './style'

type Props = {
  bannerFood: FoodInfos
}

const Banner = ({ bannerFood }: Props) => (
  <S.BannerContainer style={{ backgroundImage: `url(${bannerFood.capa})` }}>
    <S.Content className="container">
      <span>{bannerFood.tipo}</span>
      <h1>{bannerFood.titulo}</h1>
    </S.Content>
  </S.BannerContainer>
)

export default Banner
