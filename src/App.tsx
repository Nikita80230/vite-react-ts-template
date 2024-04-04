import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ShoppingCartPage, ShopsPage } from '@/pages';
import { RoutePath } from './routes/routes';

export const appRoutes = [
  {
    path: RoutePath.MAIN,
    element: <ShopsPage />,
  },
  {
    path: RoutePath.CART,
    element: <ShoppingCartPage />,
  },
];

function App() {
  return (
    <div className="app">
      <Routes>
        {appRoutes.map(route => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
