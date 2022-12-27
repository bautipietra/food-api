import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import Detail from './components/Detail/Detail';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

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
          <Route path='/' element={<Landing></Landing>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
