import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './App.styles';
import Copyright from './components/Copyright';
import HeaderNavMenu from './components/HeaderNavMenu';

import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <HeaderNavMenu />
        <Route exact path="/" component={Landing} />

        {/* <Landing /> */}
        <Copyright />
      </Wrapper>
    </Router>
  );
}

export default App;
