import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { resetPasswordValidate } from '../helpers/validate'

import styles from '../styles/Username.module.css';

export default function Reset() {

    const formik = useFormik({
        initialValues: {
            password: '',
            confirm_pwd: '',
        },
        validate: resetPasswordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values);
        }
    })

    return (
        <div className='container mx-auto'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass} style={{ width: "50%" }}>
                    <div className='title flex flex-col items-center'>
                        <h4 className='text-5xl font-bold'> Reset </h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-5'>
                            Enter new password
                        </span>
                    </div>

                    <form className='pt-20' onSubmit={formik.handleSubmit}>

                        <div className='textbox flex flex-col items-center gap-6'>
                            <input {...formik.getFieldProps('password')} className={styles.textbox} type='password' placeholder='New Password' />
                            <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type='password' placeholder='Repeat Password' />
                            <button className='bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded' type='submit'>Reset</button>
                        </div>



                    </form>
                </div>
            </div>
        </div>
    )
}