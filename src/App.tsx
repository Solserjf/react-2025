import './App.css'
import MyComponent from "../components/MyComponent.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

        <MyComponent text={'hello1'}/>
        <MyComponent text={'hello2'}/>
        <MyComponent text={'hello3'}/>
        <MyComponent text={'hello4'}/>

        {/*{MyComponent({text: 'Hello 2'})}*/}
    </>
  );
}

export default App
