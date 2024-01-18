import './App.css';
import OrderSection from './components/orderSection/orderSection';
import MainLayout from './layout/MainLayout';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <>
      <MainLayout>
        <MenuPage />
        <OrderSection />
      </MainLayout>
    </>
  );
}

export default App;
