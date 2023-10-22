import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/views/NavBar/NavBar';
import NotFound from './components/pages/NotFound/NotFound';
import SingleTable from './components/pages/SingleTable/SingleTable';
import Home from './components/pages/Home/Home';
import Footer from './components/views/Footer/Footer';

const App = () => {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<SingleTable />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
