import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { CompleteOrderPage } from './pages/CompleteOrder';
import { HomePage } from './pages/Home';
import { OrderConfirmedPage } from './pages/OrderConfirmed';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/completeOrder' element={<CompleteOrderPage />} />
        <Route path='/orderConfirmed' element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  );
}
