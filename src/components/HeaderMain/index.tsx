import { Link } from 'react-router-dom'

import logo from '../../assets/efood-logo.png'
import * as S from './style'

const HeaderMain = () => (
  <S.HeaderBar>
    <div>
      <Link title="eFood | Clique para ir à página inicial" to="/">
        <img src={logo} alt="Logo eFood" />
      </Link>
      <S.HeaderTitle>
        Viva experiências gastrônomicas no conforto da sua casa
      </S.HeaderTitle>
    </div>
  </S.HeaderBar>
)

export default HeaderMain
