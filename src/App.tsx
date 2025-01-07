import './App.css'
import MyComponent from "../components/MyComponent.tsx";

function App() {

  return (
    <>

        <MyComponent title={'title 1'}> Lorem  ipsum dolor sit  </MyComponent>
        <MyComponent title={'title 2'}></MyComponent>
        <MyComponent title={'hello3'}/>
        <MyComponent title={'hello4'}/>

        {/*{MyComponent({text: 'Hello 2'})}*/}
    </>
  );
}

export default App
