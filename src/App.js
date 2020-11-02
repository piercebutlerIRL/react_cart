import './App.css';
import Cart from './components/cart/Cart';

const items = [
  { id: 1, name: 'iPhone', price: 1009.9, qty: 1 },
  { id: 2, name: 'Cup', price: 2.99, qty: 5 },
  { id: 3, name: 'Radio', price: 34.95, qty: 1 },
];
function App() {
  return (
    <div className='App'>
      <Cart initItems={items} />
    </div>
  );
}

export default App;
