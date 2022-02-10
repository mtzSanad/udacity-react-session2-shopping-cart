import "./App.css";
import Cart from "./cart/Cart";
import Header from "./header/Header";
import Product from "./product/Product";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Cart />
        <Product />
      </main>
    </>
  );
}

export default App;
