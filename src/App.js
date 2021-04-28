import { GlobalStyle, Wrapper } from './App.styles';
import Copyright from './components/Copyright';

import Landing from './pages/Landing';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Landing />
        <h1>lol what?</h1>
        <Copyright />
      </Wrapper>
    </>
  );
}

export default App;
