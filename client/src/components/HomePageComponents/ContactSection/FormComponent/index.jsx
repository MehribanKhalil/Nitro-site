import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormCompnent = () => {
    return (
        <div className=' bg-white rounded-2xl max-w-[1000px] p-10 mx-auto'>
            <h3 className=' text-2xl pb-6 '>Contact Form</h3>

            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', subject: "", message: '' }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                    subject: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    message: Yup.string()
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className=' space-y-5'>
                    <div className=' flex flex-col  md:flex-row justify-between gap-5'>
                        <div className=' flex flex-col  w-full'>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text"  className=' border rounded-full  border-gray-300 outline-none px-3 py-2' />
                            <ErrorMessage name="firstName" />

                        </div>
                        <div className=' flex flex-col w-full' >
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" className=' border rounded-full  border-gray-300 outline-none px-3 py-2' />
                            <ErrorMessage name="lastName" />
                        </div>
                    </div>

                   <div  className=' flex flex-col w-full'>
                   <label htmlFor="email">Email</label>
                    <Field name="email" type="email" className=' border rounded-full  border-gray-300 outline-none px-3 py-2' />
                    <ErrorMessage name="email" />
                   </div>

                   <div  className=' flex flex-col w-full'>
                   <label htmlFor="subject">Subject </label>
                    <Field name="subject" type="subject" className=' border rounded-full  border-gray-300 outline-none px-3 py-2' />
                    <ErrorMessage name="subject" />
                   </div>

                   <div  className=' flex flex-col w-full'>
                   <label htmlFor="message">Message</label>
                    <Field component="textarea" rows="6" name="message" type="message" className=' border rounded-2xl  border-gray-300 outline-none px-3 py-2' />
                    <ErrorMessage name="message" />
                   </div>

                    <button type="submit" className=' bg-main-color rounded-full px-6  py-3'>Send Message</button>
                </Form>
            </Formik>

        </div>
    )
}

export default FormCompnent