import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    if (gUser) {
        console.log(gUser)
    }
    return (
        <section className=' flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Required Email'
                                        },
                                        pattern: {
                                            value: emailPattern,
                                            message: 'Error Message'
                                        }
                                    }
                                    )} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <p className=' text-red-500' role="alert">{errors.email?.message}</p>}
                                    {errors.pattern?.type === 'required' && <p className=' text-red-500' role="alert">{errors.email?.message}</p>}

                                </label>
                            </div>
                            {/* Password Field*/}
                            <div className="form-control w-full max-w-xs">
                                <label className="Password">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Required password'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 Character or longer'
                                        }
                                    }
                                    )} />
                                <label className="label">
                                    {errors.password?.type === 'required' && <p className=' text-red-500' role="alert">{errors.password?.message}</p>}
                                    {errors.password?.type === 'required' && <p className=' text-red-500' role="alert">{errors.password?.message}</p>}

                                </label>
                            </div>
                            <input type="submit"
                            value="Login" 
                            
                            className='btn w-full'
                            />
                        </form>
                    </div>
                    <div className=' divider'>OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-secondary">
                        Continue With Google</button>
                </div>
            </div>
        </section>
    );
};

export default Login;