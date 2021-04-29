import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './App.styles';
import Copyright from './components/Copyright';
import HeaderNavMenu from './components/Header/HeaderNavMenu';

import Landing from './pages/Landing';
import About from './pages/About';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <HeaderNavMenu />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />

        <Copyright />
      </Wrapper>
    </Router>
  );
}

export default App;
