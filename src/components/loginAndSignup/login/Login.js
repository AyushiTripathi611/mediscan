import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersData from "../../../data/roles.json";
import "./login.css"; // Import your CSS file

export default function Login({setShowLogin}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const user = usersData[email.split('@')[0].toLowerCase()]     
        // const user = usersData[email];

        if (user && user.password === password) {
            if (user.role === "admin") {
                // Redirect to the admin dashboard if the user is an admin
                // navigate("/admin");
                navigate("/home");
            } else {
                // Redirect to the event form page for regular users
                navigate("/home");
            }
        } else {
            alert("Invalid email address or password.");
        }
        setShowLogin(false)
    }

    return (
        <div>
            <div className={`login bg-light-subtle rounded-4`}>
                <form onSubmit={handleLogin}>
                    <div className="form-wrapper p-5">

                        <input
                            type="email"
                            autoFocus
                            className={`border rounded-4 p-3 my-2`}
                            placeholder="E-mail Address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className={`border rounded-4 p-3 my-2`}
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className={`btn background text-white p-3 my-3 rounded-4`}
                            type="submit"
                        >
                            Login
                        </button>
                        <p className={`p-2 mb-4`}>
                            Not a member? <Link to="/signup">Signup Here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
