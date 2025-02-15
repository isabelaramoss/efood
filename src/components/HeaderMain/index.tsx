import { Link } from 'react-router-dom'

import logo from '../../assets/efood-logo.png'
import { HeaderBar, HeaderTitle } from './style'

const HeaderMain = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="Logo eFood" />
      </Link>
      <HeaderTitle>
        Viva experiências gastrônomicas no conforto da sua casa
      </HeaderTitle>
    </div>
  </HeaderBar>
)

export default HeaderMain
