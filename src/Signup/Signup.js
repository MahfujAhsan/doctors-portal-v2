import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import React, { useContext, useState } from 'react';
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, updateUser } = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState('');

    const onSubmit = data => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(res => { console.log(res) })
                    .catch(err => { console.log(err) });
            })
            .catch(err => {
                console.log(err);
                setSignUpError(err.message);
            })
    };

    return (
        <React.Fragment>
            <section className='h-[800px] flex justify-center items-center'>
                <div className="w-6/12 mx-auto bg-accent py-[45px] rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-8/12 mx-auto my-[10px]">
                            <label className="label">
                                <span className="label-text font-caveat text-[22px] font-bold text-primary mb-[5px]">Name:</span>
                            </label>
                            <input {...register("name", { required: "Name is Required*" })} type="text" className="input w-full shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico" />
                            {errors.name && <p className="font-caveat text-[20px] mt-[15px] font-bold text-error">{errors.name.message}</p>}
                        </div>

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
                            <input {...register("password", { required: "Password is Required*", minLength: { value: 6, message: "6 char required" }, pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" } })} type="password" className="input w-full shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico" />
                            {errors.password && <p className="font-caveat text-[20px] mt-[15px] font-bold text-error">{errors.password.message}</p>}
                        </div>

                        <div className="form-control w-8/12 mx-auto my-[10px]">
                            <input type="submit" className="btn bg-gradient-to-r from-neutral to-primary w-8/12 mx-auto font-caveat font-bold text-[22px] text-white mt-[5px]" value="Register" />
                        </div>
                        {
                            signUpError && <p className="font-pacifico text-error">{signUpError}</p>
                        }
                    </form>
                    <p className="text-center font-pacifico text-[18px] mt-[35px] text-primary">Already have an account? <Link className="text-error" to="/login">Please Login</Link></p>
                    <div className="divider w-8/12 mx-auto">OR</div>
                    <div className="w-8/12 mx-auto">
                        <button className="btn btn-success w-full font-pacifico font-bold text-white mt-[15px]">Continue With Google</button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Signup;