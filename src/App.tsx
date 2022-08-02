import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home';
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navba } from "./components/Navbar";
import { ShoopingCardProvider } from './context/ShoopingCardContext';

function App() {

  return (
    <ShoopingCardProvider>
      <Navba />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={ <Store />} />
          <Route path="/about" element={ <About />} />
        </Routes>
      </Container>
    </ShoopingCardProvider>
  )
}

export default App
