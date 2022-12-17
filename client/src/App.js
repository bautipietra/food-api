import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
        <Switch>
          <Route exact path='/' component={Landing}></Route>
          <Route path='/recipes' component={Home}></Route>
          <Route path='/' component={Landing}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
