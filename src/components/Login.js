import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom"
import { Alert } from "react-bootstrap"
import { login } from '../firebase/auth'
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let newUser;
        setLoading(true)
        try {
            newUser = await login(email, password)
        } catch (error) {
            console.log(error)
        }
        if (newUser) {
            history.push(`/`)
        }
        else {
            setLoading(false);
        }
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-dark" disabled={loading}>Submit</button>
                or
                <Link to="/signup">Sign Up</Link>
            </form>
        </div>
    )
}
export default Login