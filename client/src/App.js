import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import Create from './components/Create/Create';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route exact path='/' element={<Landing></Landing>}></Route>
          <Route path='/recipes' element={<Home></Home>}></Route>
          <Route exact path='/recipe/:id' element={<Detail></Detail>}></Route>
          <Route exact path='/create' element={<Create></Create>}></Route>
          <Route exact path='/favorites' element={<Favorites></Favorites>}></Route>
          <Route path='*' element={<Landing></Landing>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
