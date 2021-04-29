import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './App.styles';
import Copyright from './components/Copyright';
import HeaderNavMenu from './components/Header/HeaderNavMenu';

import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <HeaderNavMenu />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />

        <Copyright />
      </Wrapper>
    </Router>
  );
}

export default App;
