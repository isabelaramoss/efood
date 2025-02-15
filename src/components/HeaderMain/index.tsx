import { Link } from 'react-router-dom'

import logo from '../../assets/efood-logo.png'
import { HeaderBar, HeaderTitle } from './style'

const HeaderMain = () => (
  <HeaderBar>
    <div>
      <Link title="eFood | Clique para ir à página inicial" to="/">
        <img src={logo} alt="Logo eFood" />
      </Link>
      <HeaderTitle>
        Viva experiências gastrônomicas no conforto da sua casa
      </HeaderTitle>
    </div>
  </HeaderBar>
)

export default HeaderMain
