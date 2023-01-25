import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const {signIn} = useContext(AuthContext);

    const [loginError, setLoginError] = useState("");
    const [loginUserEmail, setLoginUserEmail] = useState("");
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'; 

    if(token) {
        navigate(from, {replace: true});
    }

    const onSubmit = data => {
        setLoginError('');
        signIn(data.email, data.password)
        .then((res) => {
            const user = res.user;
            console.log(user);
            setLoginUserEmail(data.email)
        })
        .catch((err) => {
            console.log(err.message);
            setLoginError(err.message);
        })
    };

    return (
        <React.Fragment>
            <section className='h-[800px] flex justify-center items-center'>
                <div className="w-6/12 mx-auto bg-accent py-[45px] rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-8/12 mx-auto my-[10px]">
                            <label className="label">
                                <span className="label-text font-caveat text-[22px] font-bold text-primary mb-[5px]">Email:</span>
                            </label>
                            <input {...register("email", { required: "Email is Required*" })} type="text" className="input w-full shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico" />
                            {errors.email && <p className="font-caveat text-[20px] mt-[15px] font-bold text-error">{errors.email.message}</p>}
                        </div>

                        <div className="form-control w-8/12 mx-auto my-[10px]">
                            <label className="label">
                                <span className="label-text font-caveat text-[22px] font-bold text-primary mb-[5px]">Password:</span>
                            </label>
                            <input {...register("password", { required: "Password is Required*", minLength: {value: 6, message: "6 char required"}})} type="password" className="input w-full shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico" />
                            {errors.password && <p className="font-caveat text-[20px] mt-[15px] font-bold text-error">{errors.password.message}</p>}
                            <label className="label">
                                <span className="label-text font-pacifico text-[16px] text-white mt-[5px]">Forgot Password?</span>
                            </label>
                        </div>

                        <div className="form-control w-8/12 mx-auto my-[10px]">
                            <input type="submit" className="btn bg-gradient-to-r from-neutral to-primary w-8/12 mx-auto font-caveat font-bold text-[22px] text-white mt-[5px]" value="Submit" />
                        </div>
                        <div>
                            {
                                loginError && <p className="text-center font-pacifico mt-[15px] text-error">{loginError}</p>
                            }
                        </div>
                    </form>
                    <p className="text-center font-pacifico text-[18px] mt-[35px] text-primary">New to Doctors Portal? <Link className="text-error" to="/signup">Create New Account</Link></p>
                    <div className="divider w-8/12 mx-auto">OR</div>
                    <div className="w-8/12 mx-auto">
                        <button className="btn btn-success w-full font-pacifico font-bold text-white mt-[15px]">Continue With Google</button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Login;