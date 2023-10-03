import logo from './logo.svg';
import './App.css';
import { YooCheckout } from '@a2seven/yoo-checkout';


const checkout = new YooCheckout({ shopId: 'your_shopId', secretKey: 'your_secretKey' });

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
