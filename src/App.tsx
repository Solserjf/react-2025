import './App.css'
import {productS} from "./data/productsList.ts";
import MyProduct from "./components/my-product/MyProduct.tsx";


function App() {

  return (
    <>
      {
        productS.map((product, index) => <MyProduct key={index} product={product}/>)

      }
      </>
      )
}

export default App
