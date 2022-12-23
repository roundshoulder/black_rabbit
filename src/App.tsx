import { Route, Routes, useLocation } from 'react-router-dom';
import Container from './components/Container';
import Header from './components/Header';
import Create from './pages/Create';
import Home from './pages/Home';
import Loading from './pages/Loading';
import Result from './pages/Result';

function App() {
  const isHome = useLocation().pathname === '/';
  return (
    <Container>
      {!isHome && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Container>
  );
}

export default App;
