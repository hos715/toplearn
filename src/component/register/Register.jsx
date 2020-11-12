import React, { useContext } from 'react';
import { Context } from './../context/context';
const Register = () => {

    const rc = useContext(Context);




    // const handleSubmit = event => {
    //     event.preventDefault();

    //     const user = {
    //         fullname,
    //         email,
    //         password
    //     };
    //     if (validator.current.allValid()) {
    //         registerUser(user, (isOk, data) => {
    //             if (!isOk) {
    //                 return toast.error(`ثبت نام انجام نشد دلیل: ${data}`);
    //             }
    //             toast.success("ثبت نام با موفقیت انجام شد");
    //             reset();
    //         });
    //     } else {
    //         validator.current.showMessages()
    //         forceUpdate(1);
    //     }
    // };

    return (
        <main className="client-page">
            <div className="container-content">

                <header><h2> عضویت در سایت </h2></header>
                <div className="form-layer">

                    <form onSubmit={rc.handleRegister}>

                        <div className="input-group">
                            <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                            <input name="fullname" type="text" className="form-control" placeholder="نام و نام خانوادگی"
                                aria-describedby="username" value={rc.fullname}
                                onChange={e => {
                                    rc.setFullname(e.target.value);
                                    rc.validator.current.showMessageFor("fullname");
                                }} />
                            {rc.validator.current.message("fullname", rc.fullname, "required|min:5")}
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input name="email" type="text" className="form-control" placeholder="ایمیل"
                                aria-describedby="email-address" value={rc.email} onChange={e => {
                                    rc.setEmail(e.target.value);
                                    rc.validator.current.showMessageFor("email");
                                }} />
                            {rc.validator.current.message("email", rc.email, "required|email")}
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input name="password" type="text" className="form-control" placeholder="رمز عبور "
                                aria-describedby="password" value={rc.password} onChange={e => {
                                    rc.setPassword(e.target.value);
                                    rc.validator.current.showMessageFor("password");
                                }} />
                            {rc.validator.current.message("password", rc.password, "required|min:5")}
                        </div>

                        <div className="accept-rules">
                            <label><input name="policy" type="checkbox"
                                value="policy" onChange={e => {
                                    rc.setPolicy(e.currentTarget.checked);
                                    rc.validator.current.showMessageFor("policy")
                                }} />  قوانین و مقررات سایت را میپذیرم </label>
                            {rc.validator.current.message("policy", rc.policy, "required")}
                        </div>

                        <div className="link">
                            <a href="a"> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                            <a href="a"> <i className="zmdi zmdi-account"></i> ورود به سایت </a>
                        </div>

                        <button className="btn btn-success"> عضویت در سایت </button>

                    </form>
                </div>

            </div>
        </main>
    );
}

export default Register;