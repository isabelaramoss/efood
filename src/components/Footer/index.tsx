import { Link } from 'react-router-dom'

import logo from '../../assets/efood-logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

import * as S from './style'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <Link title="eFood | Clique para ir à página inicial" to="/">
        <img src={logo} alt="Logo eFood" />
      </Link>
      <S.ListContainer>
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
      </S.ListContainer>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </S.FooterContainer>
)

export default Footer
