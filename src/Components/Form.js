import React from 'react';
import { useFormik } from 'formik';
import { signUpSchema } from '../Schema';
import Button from './Button';
import Input from './Input';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const Form = ({ open, close }) => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log('data', values);
            action.resetForm();
        }
    })

    // console.log('dataForm', formData);

  return (
        <div className='container'>
            <div className='row modal-container d-flex'>
                <div className='modal-left col-md-6 col-sm-12'>
                    <span className="close" onClick={close}>&times;</span>
                    <span className='modal-txt'> Welcome! </span>
                    <p className='modal-desc'> The sea of new creations. </p>
                    <form onSubmit={handleSubmit}>
                        <div className='input-block'>
                            <label className='input-label'> NAME </label>
                            <Input 
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={values.name}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                            {errors.name && touched.name && <p className='form-errors'> {errors.name} </p>}
                        </div>
                        <div className='input-block'>
                            <label className='input-label'> EMAIL </label>
                            <Input 
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={values.email}
                                handleChange={handleChange}
                                handleblur={handleBlur}
                            />
                            {errors.email && touched.email && <p className='form-errors'> {errors.email} </p>}
                        </div>
                        <div className='input-block d-flex flex-column'>
                            <label className='input-label'> PASSWORD </label>
                            <Input 
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={values.password}
                                handleChange={handleChange}
                                handleblur={handleBlur}
                            />
                            {errors.password && touched.password && <p className='form-errors'> {errors.password} </p>}
                        </div>
                        <div className='input-block'>
                            <label className='input-label'> CONFIRM PASSWORD </label>
                            <Input 
                                type='password'
                                name='confirmPassword'
                                placeholder='Confirm Password'
                                value={values.confirmPassword}
                                handleChange={handleChange}
                                handleblur={handleBlur}
                            />
                            {errors.confirmPassword && touched.confirmPassword && <p className='form-errors'> {errors.confirmPassword} </p>}
                        </div>
                        <div className='modal-buttons d-flex justify-content-between align-items-center'>
                            <span> 
                                Already have an account? <a href='#' className='sign-in'> Sign In Now </a>
                            </span>
                            <Button type='submit' label='Register' />
                        </div>
                    </form>
                </div>
                <div className='col-md-6 modal-right d-none d-md-block'>
                    <img
                        src='/Images/signup-bg.png'
                        alt='desc'
                        className='signup-bg'
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
  )
};

export default Form;