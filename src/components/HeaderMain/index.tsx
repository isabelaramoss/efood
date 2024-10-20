import { Link } from 'react-router-dom'
import { HeaderBar, HeaderTitle } from './style'
import logo from '../../assets/efood-logo.png'

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
