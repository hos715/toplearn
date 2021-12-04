import React from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useState } from 'react/cjs/react.development';
import { loginUser } from '../../../services/userService';

const Login = () => {

   const navigate = useNavigate();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const resetStates = () => {
      setEmail("");
      setPassword("");
   }

   const handleLoginUser = async event => {
      event.preventDefault();
      const signinUser = {
         email,
         password
      }
      try {
         const { status, data } = await loginUser(signinUser)
         if (status === 200) {
            toast.success("ورود موفقیت امیز بود.")
            localStorage.setItem('token', data.token);
            resetStates();
            navigate('/', { replace: true });
         }
      } catch (ex) { console.log(ex); }
   }

   return (
      <>
         <div className="container">
            <nav aria-label="breadcrumb">
               <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                  <li className="breadcrumb-item active" aria-current="page">ورود به سایت</li>
               </ul>
            </nav>
         </div>
         <main className="client-page">
            <div className="container-content">

               <header><h2> ورود به سایت </h2></header>

               <div className="form-layer">

                  <form onSubmit={e => handleLoginUser(e)}>

                     <div className="input-group">
                        <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                        <input
                           type="email"
                           className="form-control"
                           placeholder="ایمیل"
                           aria-describedby="email-address"
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                        />
                     </div>

                     <div className="input-group">
                        <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                        <input
                           type="password"
                           className="form-control"
                           placeholder="رمز عبور"
                           aria-describedby="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                        />
                     </div>

                     <div className="remember-me">
                        <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                     </div>

                     <div className="link">
                        <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                        <a href=""> <i className="zmdi zmdi-account"></i> عضویت در سایت </a>
                     </div>

                     <button className="btn btn-success"> ورود به سایت </button>

                  </form>
               </div>

            </div>
         </main>
      </>
   );
}

export default Login;