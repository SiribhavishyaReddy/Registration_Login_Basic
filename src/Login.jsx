import {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(response => {
                console.log(response);
                if (response.data === "success") {
                    navigate('/home');
                } else {
                    setError('Login failed. Please check your credentials.');
                }
            })
            .catch(err => {
                console.error(err);
                setError('An error occurred. Please try again later.');
            });
    }

    // Background image style
    const backgroundStyle = {
        backgroundImage: 'url("https://pbs.twimg.com/media/GYztAFkXsAAfskt.jpg:large")', // Change to your image path
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        height: '100vh',
    };

    return (
        <div style={backgroundStyle} className="d-flex justify-content-center align-items-center">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>
                <p> Dont have an Account?</p>
                <Link to="/register" className="btn btn-default border w-100 rounded-0 bg-light text-decoration-none">
                    Register
                </Link>
            </div>
        </div>
    );
}

export default Login;