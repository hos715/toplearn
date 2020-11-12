import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MainLayout from './../component/layouts/MainLayout';
import Course from './../component/course/course';
import Login from './../component/login/Login';
import Register from './../component/register/Register';
import Archive from './../component/archive/Archive';
import SingleCource from './../component/course/SingleCource';
import { paginate } from './../utils/paginate';
import { addUser, clearUser } from './../actions/user';
import { decodeToken } from './../utils/decodeToken';
import Logout from './../component/login/Logout';
import userProfile from './../component/profile/userProfile';
import { isEmpty } from 'lodash';
import UserContext from '../component/context/userContext';
import NotFound from './../component/common/404';
import PrivateLayout from './../component/layouts/PrivateLayout';
import Dashboard from './../component/admin/Dashboard';
import CourseTable from './../component/admin/CourseTable';
import AdminContext from '../component/context/adminContext';

const Toplearn = () => {
    const courses = useSelector(state => state.courses);
    const user = useSelector(state => state.user);

    const indexCourses = paginate(courses, 1, 8);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchUser()
    }, []);
    const dispatchUser = () => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            const timeNow = Date.now() / 1000;

            if (decodedToken.payload.exp < timeNow) {
                localStorage.removeItem("token");
                dispatch(clearUser());
            }
            else dispatch(addUser(decodedToken.payload.user));

        }
    }

    return (
        <Switch>
            <Route path={["/dashboard"]}  >
                <PrivateLayout>
                    <Switch>
                        <Route path="/dashboard/courses" exact
                            render={() => !isEmpty(user) && user.isAdmin ?
                                (
                                    <AdminContext courses={courses}>
                                        <CourseTable />
                                    </AdminContext>
                                ) : (
                                    <Redirect to="/" />
                                )
                            }
                        />
                        <Route path="/dashboard" exact
                            render={() => !isEmpty(user) && user.isAdmin ?
                                (
                                    <Dashboard courses={courses} />
                                ) : (
                                    <Redirect to="/" />
                                )
                            }
                        />
                    </Switch>
                </PrivateLayout>
            </Route>
            <Route path={["/"]} >
                <MainLayout>
                    <Switch>
                        <Route path="/login"
                            render={() =>
                                isEmpty(user) ? (
                                    <UserContext>
                                        <Login />
                                    </UserContext>
                                ) : (
                                        <Redirect to="/" />
                                    )
                            }
                        />
                        <Route path="/logout" component={Logout} />
                        <Route path="/register"
                            render={() =>
                                isEmpty(user) ? (
                                    <UserContext>
                                        <Register />
                                    </UserContext>
                                ) : (
                                        <Redirect to="/" />
                                    )
                            }
                        />
                        <Route path="/userProfile" component={userProfile} />
                        <Route path="/course/:id" component={SingleCource} />
                        <Route path="/archive" component={Archive} />
                        <Route path="/" exact
                            render={() => <Course courses={indexCourses} />}
                        />
                        <Route path="*" exact component={NotFound} />
                    </Switch>
                </MainLayout>
            </Route>
        </Switch>
    );
}

export default Toplearn;