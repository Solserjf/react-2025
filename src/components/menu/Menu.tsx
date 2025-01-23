import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/login'}>login page</Link></li>
                <li><Link to={'/auth/resources'}>AuthResourcesPage</Link></li>
            </ul>
        </div>
    );
};