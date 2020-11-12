import React, { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import SimpleReactValidator from "simple-react-validator";
import { loginUser, registerUser } from './../../services/userServices';
import { toast } from 'react-toastify';
import { addUser } from './../../actions/user';
import { decodeToken } from './../../utils/decodeToken';
import { withRouter } from 'react-router-dom';
import { Context } from './context';

import { showLoading, hideLoading } from 'react-redux-loading-bar';


const UserContext = (props) => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [policy, setPolicy] = useState();

    const [, forceUpdate] = useState();

    const dispatch = useDispatch();

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پر کردن این فیلد الزامی است",
                min: "باید حداقل 5 کاراکتر باشد",
                email: "ایمیل وارد شده صحیح نمی باشد"
            }, element: message => <div className="validator-message">{message}</div>
        })
    );

    const resetStates = () => {
        setFullname("");
        setEmail("");
        setPassword("");
        setPolicy();
    }

    const handleLogin = async event => {
        event.preventDefault();
        const user = { email, password };

        try {
            if (validator.current.allValid()) {
                dispatch(showLoading());
                const { status, data } = await loginUser(user);
                if (status === 200) {
                    toast.success("ورود موفقیت آمیز بود.");
                    localStorage.setItem("token", data.token);
                    dispatch(addUser(decodeToken(data.token).payload.user))
                    dispatch(hideLoading());
                    props.history.replace("/");
                    resetStates();
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            console.log(ex);
            dispatch(hideLoading());
            toast.error("مشکلی پیش آمده.");
        }
    };

    const handleRegister = async event => {
        event.preventDefault();
        const userr = {
            fullname,
            email,
            password
        };

        try {
            if (validator.current.allValid()) {
                dispatch(showLoading());
                const { status } = await registerUser(userr);
                if (status === 201) {
                    toast.success("کاربر با موفقیت ساخته شد.");
                    dispatch(hideLoading());
                    props.history.push("/login");
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            dispatch(hideLoading());
            toast.error("مشکلی پیش آمده.");
            console.log(ex);
        }
    };

    return (
        <Context.Provider
            value={{
                fullname,
                setFullname,
                email,
                setEmail,
                password,
                setPassword,
                policy,
                setPolicy,
                validator,
                handleLogin,
                handleRegister
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
export default withRouter(UserContext);