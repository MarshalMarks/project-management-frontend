import { logout } from "../services/firebase";

function HeaderBar() {
    return (
        <div className="headerBar">
            <button onClick={logout}>Log Out</button>
        </div>
    );
}

export {
    HeaderBar
};