import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from '@/pages';
import { RoutePath } from './routes/routes';
import { PageLayout } from './components';

export const appRoutes = [
  {
    path: RoutePath.MAIN,
    element: <MainPage />,
  },
];

function App() {
  return (
    <div className="app">
      <PageLayout>
        <Routes>
          {appRoutes.map(route => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </PageLayout>
    </div>
  );
}

export default App;
