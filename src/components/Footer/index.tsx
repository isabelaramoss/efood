import logo from '../../assets/efood-logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import { FooterContainer, ListContainer } from './style'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <img src={logo} alt="Logo eFood" />
      <ListContainer>
        <li>
          <a href="">
            <img src={instagram} alt="ícone Instagram" />
          </a>
        </li>

        <li>
          <a href="">
            <img src={facebook} alt="ícone Facebook" />
          </a>
        </li>

        <li>
          <a href="">
            <img src={twitter} alt="ícone Twitter" />
          </a>
        </li>
      </ListContainer>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </FooterContainer>
)

export default Footer
