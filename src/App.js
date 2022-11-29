import {Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import  Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import {ShoppingCartProvider} from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
    <Navbar />
    <Container className='mb-4'>
      <Routes>
        <Route path = '/' element = {< Home />} />
        <Route path = '/store' element = {< Store />} />
        <Route path = '/about' element = {< About />} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
  );
}

export default App;

// To us the router we have to create links here, because this is the parent of the entire app.
// it is here that we will insert all the links for the navigation and routing.
// first would be to import the Routes and Route from the react-ro
