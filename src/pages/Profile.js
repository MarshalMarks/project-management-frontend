import { useUser } from "../services/useUser";
import { getAuth } from "firebase/auth";
import { auth } from "../services/firebase"
import axios from "axios";

function Profile() {
    const { user, isLoading } = useUser();

    const getUserInfo = (id) => {
        // TODO: get user info from id
        const fillerUser = {
            firstName: "Clay",
            lastName: "Marks",
            email: "marshmarks@gmail.com"
        };
        return fillerUser;
    }

    const userObject = getUserInfo(getAuth());

    return (
        <div>
            <h1>{userObject.firstName} {userObject.lastName}</h1>
            <h2>{userObject.email}</h2>
        </div>
    );
}

export default Profile;