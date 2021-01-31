import Routes from './routes/index'
import Header from './components/header/Header';
import {UserProvider} from "./firebase/UserProvider";
import OrderContext from "./components/contexts/order/ordersContext";
import Footer from "./pages/footer";

function App() {

  return (
      <UserProvider>
       <div>
        <Header />
        <Routes />
        <Footer/>
      </div>
      </UserProvider>

  );
}
export default App