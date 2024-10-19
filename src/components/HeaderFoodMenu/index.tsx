import logo from '../../assets/efood-logo.png'

const HeaderFoodMenu = () => (
  <div className="header-container">
    <div className="container">
      <h3>Restaurantes</h3>
      <a href="">
        <img src={logo} alt="Logo eFood" />
      </a>
      <h3>0 produto(s) no carrinho</h3>
    </div>
  </div>
)

export default HeaderFoodMenu
