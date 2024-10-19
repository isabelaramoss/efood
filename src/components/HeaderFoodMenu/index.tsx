import { Link } from 'react-router-dom'
import logo from '../../assets/efood-logo.png'
import { Content, HeaderContainer, Title } from './style'

const HeaderFoodMenu = () => (
  <HeaderContainer>
    <Content className="container">
      <Title>Restaurantes</Title>
      <Link to="/">
        <img src={logo} alt="Logo eFood" />
      </Link>
      <Title>0 produto(s) no carrinho</Title>
    </Content>
  </HeaderContainer>
)

export default HeaderFoodMenu
