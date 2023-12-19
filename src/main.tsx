import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StyledWrapper } from './components/Wrapper/Wrapper.styled.tsx';
import { GlobalStyle } from './components/SharedStyles.styled.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/experience',
    element: <App />,
  },
  {
    path: '/aboutme',
    element: <App />,
  },
  {
    path: '/education',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledWrapper>
      <GlobalStyle />
      <RouterProvider router={router} />
    </StyledWrapper>
  </StrictMode>
);
