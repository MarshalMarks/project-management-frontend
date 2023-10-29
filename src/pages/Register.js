import { Link } from "react-router-dom";

function Register() {
    return (
        <>
            <div className="register">
                <form className="form">
                    <label>Register</label>
                    <input className="input" type="email" name="email" placeholder="Email" required></input>
                    <input className="input" type="password" name="password" placeholder="Password" required></input>
                    <button>Register</button>
                    <p>Already have an account? <Link to="/login">Log In</Link></p>
                </form>
            </div>
        </>
    );
}

export default Register;