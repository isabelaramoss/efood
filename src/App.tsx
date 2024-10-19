import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
