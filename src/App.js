import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './App.styles';
import Copyright from './components/Copyright';
import HeaderNavMenu from './components/Header/HeaderNavMenu';

import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// This theme is really only neccesary for the form on the Contact page.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: ['Cormorant', 'Times New Roman', 'serif'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
