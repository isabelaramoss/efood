import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import HeaderMain from './components/HeaderMain'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HeaderMain />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
