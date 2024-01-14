import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StyledWrapper } from './components/Wrapper/Wrapper.styled.tsx';
import { GlobalStyle } from './components/SharedStyles.styled.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage.tsx';
import { ExperiencePage } from './pages/ExperiencePage.tsx';
import { SkillsPage } from './pages/SkillsPage.tsx';
import { EducationPage } from './pages/EducationPage.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProfilePage text="Profile" />,
  },
  {
    path: '/experience',
    element: <ExperiencePage />,
  },
  {
    path: '/skills',
    element: <SkillsPage />,
  },
  {
    path: '/education',
    element: <EducationPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledWrapper>
      <GlobalStyle />
      <App>
        <RouterProvider router={router} />
      </App>
    </StyledWrapper>
  </StrictMode>
);
