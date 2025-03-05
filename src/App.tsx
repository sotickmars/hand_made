import { Provider } from 'react-redux';
import './App.scss';
import { routers } from './routers';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './store';

const router = createBrowserRouter(routers);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
};

export default App;
