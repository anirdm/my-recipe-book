import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { useFormik } from 'formik';
import { authSchema } from '../schemas/authSchema';

const onSubmit = (errors) => {
    //e.preventDefault();

    console.log(errors);

}

const AdminAuth = () => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: authSchema,
        onSubmit
    })

    return (
        <div className="flex flex-col h-screen">
            <section className="flex p-7 mx-6 mt-6 items-center justify-center">
                <img src="/logo.svg" alt="" className='size-60' />
            </section>

            <section className="flex bg-stone-100 flex-grow justify-center">
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-7 m-16'
                >
                    <div>
                        <div className={`flex items-center border w-80 py-3 bg-white ${errors.email && touched.email && 'border-red-500'}`}>
                            <div className='px-3 border-r'>
                                <FaUser size={12} />
                            </div>
                            <input
                                type="text"
                                className='pl-2 text-sm focus:outline-none w-full'
                                name='email'
                                placeholder='Email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.email && touched.email && (<p className='text-xs text-red-500 mt-2'>{errors.email}</p>)}
                    </div>

                    <div>
                        <div className={`flex items-center border w-80 py-3 bg-white ${errors.password && touched.password && 'border-red-500'}`}>
                            <div className='px-3 border-r'>
                                <RiLockPasswordFill size={12} />
                            </div>
                            <input
                                type="password"
                                className='pl-2 text-sm focus:outline-none w-full'
                                name='password'
                                placeholder='Password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.password && touched.password && (<p className='text-xs text-red-500 mt-2'>{errors.password}</p>)}
                    </div>

                    <button
                        type='submit'
                        className='flex justify-between border border-stone-300 text-gray-500 text-sm p-3 transition hover:bg-black hover:text-white ease-in duration-200'
                    >
                        Log in
                        <MdOutlineLogout size={14} />
                    </button>
                </form>
            </section>
        </div>

    )
}

export default AdminAuth
