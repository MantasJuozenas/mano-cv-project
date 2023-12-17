import { GlobalStyle } from './components/SharedStyles.styled';
import { StyledWrapper } from './components/Wrapper/Wrapper.styled';
import { MainCard } from './components/MainCard/MainCard';

function App() {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <MainCard />
    </StyledWrapper>
  );
}

export default App;
