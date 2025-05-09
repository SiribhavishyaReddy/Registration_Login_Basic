import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password, gender, age })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1065043970/photo/young-woman-sitting-on-edge-looks-out-at-view.jpg?s=612x612&w=0&k=20&c=zXlF6EJwCHDAtEJ_kh8zs6PqliCKZA75F93ffAkJURY=')`, 
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender"><strong>Gender</strong></label>
                        <select
                            name="gender"
                            className="form-control rounded-0"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age"><strong>Age</strong></label>
                        <input
                            type="number"
                            placeholder="Enter Age"
                            name="age"
                            className="form-control rounded-0"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                </form>
                <p>Already Have an Account?</p>
                <Link to="/login" className="btn btn-default border w-100 rounded-0 bg-light text-decoration-none">Login</Link>
            </div>
        </div>
    );
}

export default Signup;