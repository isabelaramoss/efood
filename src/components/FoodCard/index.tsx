import starIcon from '../../assets/star.png'
import img from '../../assets/sushi.png'
//import from './style'

const FoodCard = () => (
  <div className="food-container">
    <img src={img} alt="" />
    <div className="tag-content">
      <a href="#">Tag</a>
    </div>
    <div className="info-content">
      <div className="infos">
        <h4>Nome restaurante</h4>
        <div className="rating-container">
          <h4>4.6</h4>
          <img src={starIcon} alt="Imagem estrela" />
        </div>
      </div>
      <div className="description">
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </div>
      <button>Saiba mais</button>
    </div>
  </div>
)

export default FoodCard
