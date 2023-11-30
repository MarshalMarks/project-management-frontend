import { logout } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

function HeaderBar() {
    const navigate = useNavigate();

    const profileClick = async () => {
        try {
            navigate("/profile");
            console.log("Profile page opened successfully!");
        } catch (error) {
            console.error('Error navigating to the profile page:', error.message);
        }
    };

    return (
        <div className="headerBar">
            <div></div>
            <button onClick={profileClick}>
                <FontAwesomeIcon icon={faUser} />
            </button>
            <button onClick={logout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
        </div>
    );
}

export {
    HeaderBar
};