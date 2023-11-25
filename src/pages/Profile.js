import { useParams } from "react-router-dom";
import axios from "axios";

function Profile() {
    const { userId } = useParams();

    

    return (
        <div>
            <h1>User ID: {userId}</h1>
        </div>
    );
}

export default Profile;