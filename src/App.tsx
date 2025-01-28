import './App.css'
import {MainLeftBranch} from "./components/MainLeftBranch.tsx";
import {MainRightBranch} from "./components/MainRightBranch.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
    const [myThemeColor, setMyThemeColor] = useState<string>('lightColorTheme');

  return (
    <>
        <MyContext.Provider value={{
            themeColor: myThemeColor,
            changeThemeColor: (themeValue: string) => {
                setMyThemeColor(themeValue);
            }
        }}>
        <MainRightBranch/>
        <MainLeftBranch/>
        </MyContext.Provider>
    </>
  )
}

export default App
