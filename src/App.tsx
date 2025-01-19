import './App.css'
import {PaginationComponent} from "./components/pagination/PaginationComponent.tsx";
import {UsersComponents} from "./components/users/UsersComponents.tsx";
// import {UserPage} from "./pages/UserPage.tsx";

function App() {

    return (
        <div>
            <UsersComponents/>
            <PaginationComponent/>
        </div>
    )
}

export default App
