import starIcon from '../../assets/star.png'
import img from '../../assets/sushi.png'
import Tag from '../Tag'
import {
  FoodContainer,
  TagContent,
  InfoContent,
  Infos,
  RatingContainer,
  Descr,
  Button
} from './style'

const FoodCard = () => (
  <FoodContainer>
    <img src={img} alt="#" />
    <TagContent className="tag">
      <Tag>Destaque da semana</Tag>
      <Tag>Japonesa</Tag>
    </TagContent>
    <InfoContent>
      <Infos>
        <h4>Nome restaurante</h4>
        <RatingContainer>
          <h4>4.6</h4>
          <img src={starIcon} alt="Imagem estrela" />
        </RatingContainer>
      </Infos>
      <Descr>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Descr>
      <Button>Saiba mais</Button>
    </InfoContent>
  </FoodContainer>
)

export default FoodCard
