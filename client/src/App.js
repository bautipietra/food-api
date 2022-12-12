import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <ScrollToTop></ScrollToTop>
        <Landing></Landing>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
