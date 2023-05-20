import React from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// css
import './style.css';
// fontawesome global
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// header componets for nav bar/routing
import About from './components/About/About';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Main from './components/Main/index';
import Footer from './components/footer/footer';
import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing';

// import ContactForm from './components/Contact/ContactForm';




function App() {
  return (
      <Router>
      <div>
         <Header />
         <Switch>
            <Route path="/Home" component= {Home} />
            <Route path="/About" component= {About} />
            <Route path="/Projects" component= {Projects} />
            <Route path="/Pricing" component= {Pricing} />
            <Route path="/Contactme" component= {Contact} />
            <Route path ="/" exact component= {Main} />
            <Route path ="/react-portfolio/" component= {Main} />
         </Switch>
         <Footer />
      </div>
      </Router>
  );
}

const Home = () => (
  <div>
    <Main />
  </div>
)



const Form = () => {
  return (
    <div className="Form">                 
        <Contact />           
    </div>
  );
}





library.add(fas,)

export default App;