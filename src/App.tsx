import { GlobalStyle } from './styles'
import Header from './components/Header'
import FoodCard from './components/FoodCard'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="container">
        <FoodCard />
      </div>
    </>
  )
}

export default App
