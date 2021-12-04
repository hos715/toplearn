import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react/cjs/react.development';

const Register = () => {

    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const clearStates = () => {
        setFullname("");
        setEmail("");
        setPassword("");
    }

    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (fullname.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0) {
            const registerUser = {
                fullname,
                email,
                password
            }
            console.log(registerUser);
            axios
                .post(
                    "https://toplearnapi.ghorbany.dev/api/register",
                    JSON.stringify(registerUser),
                    {
                        headers:
                            { "Content-Type": "application/json" }
                    }
                )
                .then(({ status, data }) => {
                    if (status === 201) {
                        console.log(data);
                        toast.success(`ثبت نام موفقیت آمیز بود.`)
                        clearStates();
                    }
                })
                .catch((ex) => {
                    console.log(ex);
                    toast.error(`ثبت نام موفقیت آمیز نبود.`)
                })
        } else {
            console.log("فیلد خالی");
        }
    }

    return (
        <>

            <div className="container">
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                        <li className="breadcrumb-item active" aria-current="page">عضویت در سایت</li>
                    </ul>
                </nav>
            </div>

            <main className="client-page">
                <div className="container-content">

                    <header><h2> عضویت در سایت </h2></header>

                    <div className="form-layer">

                        <form onSubmit={e => handleRegisterSubmit(e)}>

                            <div className="input-group">
                                <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                                <input type="text" className="form-control"
                                    placeholder="نام و نام خانوادگی"
                                    aria-describedby="username"
                                    value={fullname}
                                    onChange={e => setFullname(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                                <input type="email"
                                    className="form-control"
                                    placeholder="ایمیل" aria-describedby="email-address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                                <input type="password"
                                    className="form-control"
                                    placeholder="رمز عبور " aria-describedby="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    minLength="6"
                                />
                            </div>

                            <div className="accept-rules">
                                <label><input type="checkbox" name="" />  قوانین و مقررات سایت را میپذیرم </label>
                            </div>

                            <div className="link">
                                <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                                <a href=""> <i className="zmdi zmdi-account"></i> ورود به سایت </a>
                            </div>

                            <button className="btn btn-success"> عضویت در سایت </button>

                        </form>
                    </div>

                </div>
            </main>

        </>
    );
}

export default Register;