// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import { useFormik } from 'formik';

// import { registerUser } from '../features/User/userSlice';
// import * as yup from 'yup';

// const signupSchema = yup.object().shape({
//     name: yup.string().required("First Name is required*"),
//     email: yup.string().required("Email shouldbe valid").required("Email required*"),
//     mobile: yup.string().required("Mobile No is required*"),
//     password: yup.string().required("Password is required*").min(8, 'Password is too short - should be 8 chars minimum.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

// });

// const Signup = () => {

//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             mobile: '',
//             password: '',
//         },
//         validationSchema: signupSchema,
//         onSubmit: values => {
//             console.log(values)
//             dispatch(registerUser(values))
//         },
//     });


//     const authState = useSelector((state => state?.auth))

//     const dispatch = useDispatch()

//     const navigate = useNavigate()
//     return (
//         <div className='login template d-flex align-items-center justify-ontent-center  vh-100 bg-primary'>
//             <div className='form_container p-5 h-50 rounded bg-white border border-dark' style={{ marginLeft: "600px", width: "35%" }} >
//                 <form action='' onSubmit={formik.handleSubmit}>
//                     <h3 className='text-center'>Register</h3>
//                     <div className='mb-2'>
//                         <label htmlFor='name'>Name</label>
//                         <input
//                             type='text'
//                             placeholder='Enter name'
//                             className='form-control'
//                             value={formik.values.name}
//                             onChange={formik.handleChange("name")}
//                             onBlur={formik.handleBlur("name")}
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label htmlFor='mobile'>Mobile</label>
//                         <input
//                             type='tel'
//                             placeholder='Enter Mobile'
//                             className='form-control'
//                             value={formik.values.mobile}
//                             onChange={formik.handleChange("mobile")}
//                             onBlur={formik.handleBlur("mobile")}
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label htmlFor='email'>Email</label>
//                         <input
//                             type='email'
//                             placeholder='Enter Email'
//                             className='form-control'
//                             value={formik.values.email}
//                             onChange={formik.handleChange("email")}
//                             onBlur={formik.handleBlur("email")}
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label htmlFor='password'>Password</label>
//                         <input
//                             type='password'
//                             placeholder='Enter Password'
//                             className='form-control'
//                             value={formik.values.password}
//                             onChange={formik.handleChange("password")}
//                             onBlur={formik.handleBlur("password")}
//                         />
//                     </div>

//                     <div className='d-grid'>
//                         <button className='btn btn-primary cursor-pointer'  type='submit'>Sign Up</button>
//                     </div>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup




import React, { useEffect, useRef, useState } from 'react';
import CustomInput from '../Components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/User/userSlice';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import Container from '../Components/Container'
import { AiOutlineMail } from 'react-icons/ai'

const signupSchema = yup.object().shape({
    name: yup.string().required("First Name is required*"),
    email: yup.string().required("Email shouldbe valid").required("Email required*"),
    mobile: yup.string().required("Mobile No is required*"),
    password: yup.string().required("Password is required*").min(8, 'Password is too short - should be 8 chars minimum.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});


const Singnup = () => {

   
    const inputRef = useRef(null)

    

    const authState = useSelector((state => state?.auth))

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            password: ''
        },
        validationSchema: signupSchema,
        onSubmit: values => {
            
            dispatch(registerUser(values))
            
        },
    });



    return (
        <>
            
            <Container class1='login-wrapper py-5 home-wrapper-2 bg-primary'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card' style={{ border: "1px solid grey" }}>
                            <h3 className='text-center mb-3'>Singup</h3>
                            <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                                

                                <CustomInput
                                    type="text"
                                    name='name'
                                    placeholder='First Name*'
                                    value={formik.values.name}
                                    onChange={formik.handleChange("name")}
                                    onBlur={formik.handleBlur("name")}
                                />
                                <div className='errors'>
                                    {formik.touched.name && formik.errors.name}
                                </div>
                                
                                <CustomInput
                                    type="email"
                                    name='email'
                                    placeholder="Email*"
                                    value={formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                ></CustomInput>
                                <div className='errors'>
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <PhoneInput
                                    type="tel"
                                    className="react-tel"
                                    name='mobile'
                                    country={'in'}
                                    placeholder='Mobile No'
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange("mobile")}
                                    onBlur={formik.handleBlur("mobile")}
                                />
                                <div className='errors'>
                                    {formik.touched.mobile && formik.errors.mobile}
                                </div>

                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='password*'
                                    value={formik.values.password}
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                />
                                <div className='errors'>
                                    {formik.touched.password && formik.errors.password}
                                </div>



                                <div className='d-flex justify-content-center gap-15 align-item-center'>
                                    <button className='button border-0' type='submit'>Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Singnup