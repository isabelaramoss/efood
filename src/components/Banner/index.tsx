import { BannerContainer, Content } from './style'
import bannerImg from '../../assets/pasta.png'

const Banner = () => (
  <BannerContainer style={{ backgroundImage: `url(${bannerImg})` }}>
    <Content className="container">
      <span>Italiana</span>
      <h1>La Dolce Vita Trattoria</h1>
    </Content>
  </BannerContainer>
)

export default Banner
