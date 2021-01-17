import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import {Link} from "react-bootstrap-icons";
import {signup} from "../firebase/auth";

const Signup = (props) => {
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setLoading] = useState(false);
    const onSubmit = async (data) => {
        let newUser;
        setLoading(true);
        try {
            newUser = await signup(data.email,data.password,data.firstName,data.lastName,data.phone,data.address);
            reset();
        } catch (error) {
            console.log(error);
        }

        if (newUser) {
            props.history.push(`/`);
        } else {
            setLoading(false);
        }
    };
    const formClassName = `ui form ${isLoading ? 'loading' : ''}`;
    return (
        <div className="container">
            <div className="login-container">
                <div className="ui card login-card">
                    <div className="content">
                        <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
                            <div className="two fields">
                                <div className="field">
                                    <label>
                                        First Name
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            ref={register}
                                        />
                                    </label>
                                </div>
                                <div className="field">
                                    <label>
                                        Last Name
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            ref={register}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="field">
                                <label>
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        ref={register}
                                    />
                                </label>
                            </div>
                            <div className="field">
                                <label>
                                    Password
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        ref={register}
                                    />
                                </label>
                            </div>
                            <div className="field">
                                <label>
                                    Confirm Password
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Confirm Password"
                                        ref={register}
                                    />
                                </label>
                            </div>
                            <div className="field">
                                <label>
                                    Address
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        ref={register}
                                    />
                                </label>
                            </div>
                            <div className="field">
                                <label>
                                    Phone Number
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="Phone Number"
                                        ref={register}
                                    />
                                </label>
                            </div>
                            <div className="field actions">
                                <button className="ui primary button login" type="submit">
                                    Signup
                                </button>
                                or
                                <Link to="/login">Log In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup