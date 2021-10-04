import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Nav from './components/Nav/Nav';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
      
      
      
        
      
      <Switch>

        <Route exact path="/home">
          <Home></Home>

        </Route>
        <Route path="/footer">

          <Footer></Footer>
        </Route>
        
        <Route path="/courses">
          <Courses></Courses>
        </Route>
        <Route path="/about">
<About></About>
        </Route>
        <Route path="/contact">
<Contact></Contact>
        </Route>
        <Route exact path="*">
<NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
