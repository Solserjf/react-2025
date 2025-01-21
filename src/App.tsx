// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Menu} from "./components/menu/Menu.tsx";
import {Outlet} from "react-router";

// import MyComponent from "../components/MyComponent.tsx";

function App() {


    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}

export default App
