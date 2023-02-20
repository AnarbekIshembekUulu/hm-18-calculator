import { Provider } from "react-redux";
import { store } from "./components/store";
import Calculator from "./components/Calculator";
import Auth from "./components/Auth";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Calculator />
      <Auth />
    </Provider>
  );
}

export default App;
