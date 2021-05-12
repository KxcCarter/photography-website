import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
// Styling
import { GlobalStyle, Wrapper } from './App.styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// Components
import Copyright from './components/Copyright';
import HeaderNavMenu from './components/Header/HeaderNavMenu';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio.tsx';
import PhotoManager from './pages/PhotoManager';
import Login from './components/Login/Login';
// import Blog from './pages/Blog';

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
      <AuthProvider>
        <Router>
          <GlobalStyle />
          <Wrapper>
            <HeaderNavMenu />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path="/portfolio" component={Portfolio} /> */}

            {/* This route needs to be protected */}
            <Route exact path="/manage" component={PhotoManager} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/blog" component={Blog} /> */}

            <Copyright />
          </Wrapper>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
