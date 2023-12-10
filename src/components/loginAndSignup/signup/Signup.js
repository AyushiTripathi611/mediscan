// import "./login.css";

import { Link } from "react-router-dom";
// import ToggleButton from "../toggle/toggle";

function Signup() {
    return (
        <div>
            <div className="signup bg-light-subtle rounded-4">
                <form>
                    <div className="form-wrapper p-5">
                        <input type="email" autoFocus className="border rounded-4 p-3 my-2" placeholder="E-mail Address" required></input>
                        <input type="password" className="border rounded-4 p-3 my-2" placeholder="Password" required></input>
                        <input type="password" className="border rounded-4 p-3 my-2" placeholder="Confirm Password" required></input>
                        <button className="btn background text-light p-3 my-3 rounded-4">Signup</button>
                        <p className="p-2 mb-4">Already a member? <Link to="/">Login Here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;