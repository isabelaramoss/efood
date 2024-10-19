import { HeaderBar, HeaderTitle } from './style'
import logo from '../../assets/efood-logo.png'

const HeaderMain = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="Logo eFood" />
      <HeaderTitle>
        Viva experiências gastrônomicas no conforto da sua casa
      </HeaderTitle>
    </div>
  </HeaderBar>
)

export default HeaderMain
