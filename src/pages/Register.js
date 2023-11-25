import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../services/firebase"

function Register() {
    return (
        <>
            <div className="center">
                <h1>Register</h1>
                <input placeholder="Email" type="email" id="email" name="email" required></input>
                <input placeholder="Password" type="password" id="password" name="password" required></input>
                <input placeholder="First Name" type="text" id="fname" name="fname" required></input>
                <input placeholder="Last Name" type="text" id="lname" name="lname" required></input>
                <button>Register</button>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </>
    );
}

export default Register;