// import React from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {
//     return (
//         <div className='login template d-flex align-items-center justify-ontent-center  vh-100 bg-primary'>
//             <div className='form_container  p-5 h-50 rounded bg-white border border-dark' style={{marginLeft: "600px"}} >
//                 <form>
//                     <h3 className='text-center'>Sign In</h3>
//                     <div className='mb-2'>
//                         <label htmlFor='email'>Email</label>
//                         <input type='email' placeholder='Enter Email' className='form-control' />
//                     </div>
//                     <div className='mb-2'>
//                         <label htmlFor='password'>Password</label>
//                         <input type='password' placeholder='Enter Password' className='form-control' />
//                     </div>

//                     <div className='d-grid'>
//                         <button className='btn btn-primary'>Login</button>
//                     </div>

//                     <p className='d-flex align-items-center justify-content-center'>Dont have Account! <br></br> <Link to="/signup">Sign Up Here</Link></p>

//                     <p className='text-right'>
//                         Forgot Passord! <Link className='' to="#">Reset your Password</Link>
//                     </p>


//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login


import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



import CustomInput from '../Components/CustomInput';
import { useFormik } from 'formik';
import "./login.css"
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/User/userSlice';
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa"

const loginSchema = yup.object().shape({
    email: yup.string().required("Email shouldbe valid").required("Email is rquired*"),
    password: yup.string().required("Password is required*"),
});

const Login = () => {
    const authState = useSelector(state => state.auth.logedUser?.status)
    

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            dispatch(loginUser(values))
        },
    });

    // useEffect(() => {
    //     if (authState) {
    //         setTimeout(() => {
    //             navigate('/update-profile')
    //         }, 1000)
    //     }
    // }, [authState])





    return (
        <>
         

            <div className='row d-flex justify-content-center align-items-center w-100 vh-100 bg-primary'>
                <div className='col-lg-12 d-flex justify-content-center align-items-center'>
                    <div className=' p-5  bg-white ' style={{ border: "1px solid grey", width: "35vw", height: "95vh", borderRadius: "30px" }}>
                        <h3 className='text-center mb-3'>Get Started Now</h3>
                        <p className='text-center mb-3'>Enter your credential to access your account</p>
                        <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>

                            <div className='d-flex align-items-center justify-content-center '>
                                <button className='me-2 rounded-3 p-1 border-1'><FcGoogle className='ms-2' /> Login With Google</button>
                                <button className=' rounded-3 p-1 border-1'> <FaFacebookF className='me-1 text-primary' />Login With Facebook</button>
                            </div>
                            <p className='text-center m-2'>Or</p>
                            <div className='mt-5 '>
                                
                                <CustomInput
                                    type="email"
                                    name='email'
                                    className= "email"
                                    placeholder='Email'
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                    value={formik.values.email}
                                ></CustomInput>
                                <div className='errors'>
                                    {formik.touched.email && formik.errors.email}
                                </div>
                            </div>
                            <CustomInput
                                className='password'
                                type="password"
                                name='password'
                                placeholder='password'
                                onChange={formik.handleChange("password")}
                                onBlur={formik.handleBlur("password")}
                                value={formik.values.password}
                            />
                            <div className='errors'>
                                {formik.touched.password && formik.errors.password}
                            </div>
                            <Link className='mt-3' to="#" >Forgot your Password ?</Link>
                            <div className='d-flex justify-content-center gap-15 align-item-center mb-3 mt-3'>
                                <button className='w-100 bg-primary text-white border-light p-1' style={{ borderRadius: "20px" }} type='submit'>Login</button>

                            </div>
                            <div className='mt-3'>
                                <p>You Don't Have An Account? <Link to="/signup">Signup</Link></p>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
