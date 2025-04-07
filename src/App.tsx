import { Provider } from 'react-redux';
import './App.scss';
import { routers } from './routers';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootState, store } from './store';
import { getTheme } from './theme';
import { Theme as EmotionTheme, ThemeProvider } from '@emotion/react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const router = createBrowserRouter(routers);

const AppContent: React.FC = () => {
  const currentTheme: 'light' | 'dark' = useSelector(
    (state: RootState) => state.appState.theme
  );
  const checkTheme = useMemo(() => {
    return getTheme(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeProvider theme={checkTheme as EmotionTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
