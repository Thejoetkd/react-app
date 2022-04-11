import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav';
import About from './views/About/About';
import Detail from './views/Detail/Detail';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';

const App = () => {

  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={'/'} element={ <Home /> } />
        <Route path={'detail/:id'} element={<Detail />} />
        <Route path={'about'} element={ <About /> } />
        <Route path={'*'} element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
       
      
  );
}

export default App;
