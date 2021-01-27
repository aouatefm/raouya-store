import Routes from './routes/index'
import Header from './components/header/Header';
import {UserProvider} from "./components/contexts/cart/UserProvider";
import OrderContext from "./components/contexts/order/ordersContext";

function App() {

  return (
      <UserProvider>
       <div>
        <Header />
        <Routes />
      </div>
      </UserProvider>

  );
}
export default App