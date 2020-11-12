import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Context } from './../context/context';

const Login = ({ history }) => {

    const lc = useContext(Context);

    const {
        email, setEmail,
        password, setPassword,
        validator, handleLogin
    } = lc;

    // const handleLogin = event => {
    //     event.preventDefault();
    //     const user = { email, password }
    //     console.log(user);
    //     if (validator.current.allValid()) {
    //         loginUser(user, (isOk, data) => {
    //             if (!isOk) {
    //                 return toast.error(`ورود با شکل مواجه شده ${data}`);
    //             }
    //             toast.success(`ورود موفقیت آمیز بود`);
    //             localStorage.setItem("token", data.token);
    //             // setLoading(false);
    //             reset();
    //             history.replace("/");
    //         })
    //     } else {
    //         validator.current.showMessages()
    //         forceUpdate(1);
    //     }
    // }


    return (
        <main className="client-page">
            <div className="container-content">

                <header><h2> ورود به سایت </h2></header>

                <div className="form-layer">

                    <form onSubmit={handleLogin}>

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input name="email" type="text" className="form-control" placeholder="ایمیل"
                                aria-describedby="email-address" value={email}
                                onChange={e => {
                                    setEmail(e.target.value);
                                    validator.current.showMessageFor("email");
                                }} />
                            {validator.current.message("email", email, "required|email")}
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input name="password" type="text" className="form-control" placeholder="رمز عبور "
                                aria-describedby="password" value={password}
                                onChange={e => {
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor("password");
                                }} />
                            {validator.current.message("password", password, "required|min:6")}
                        </div>

                        <div className="remember-me">
                            <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                        </div>

                        <div className="link">
                            <a href="a"> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                            <Link to="/register"> <i className="zmdi zmdi-account"></i> عضویت در سایت </Link>
                        </div>

                        <button type="submit" className="btn btn-success"> ورود به سایت </button>

                    </form>
                </div>

            </div>
        </main>
    );
}

export default withRouter(Login);