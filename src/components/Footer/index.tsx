import { Link } from 'react-router-dom'

import logo from '../../assets/efood-logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

import { FooterContainer, ListContainer } from './style'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="Logo eFood" />
      </Link>
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
