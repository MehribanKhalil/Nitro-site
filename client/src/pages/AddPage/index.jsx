import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddPage = () => {

    const [services, setServices] = useState([])
    const createService = async (data) => {
        const res = await axios.post("http://localhost:8000/api/product/",data)
        setServices(res.data)
    }
    console.log(services);



    console.log( services);
    return (
        <div className='page'>

            <h2 className=' title py-10'>Add Page</h2>

            <div className='bg-gray-200 wrapper px-12 py-6 rounded-xl'>
                <Formik
                    initialValues={{ image: '', title: '', info: '' }}
                    validationSchema={Yup.object({
                        image: Yup.string().required('Required'),
                        title: Yup.string().required('Required'),
                        info: Yup.string().required('Required'),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        createService (values)
                        //  resetForm()
                    }}
                >
                    <Form className='flex flex-col  gap-5'>
                       <div className=' flex flex-col  w-full'>
                       <label htmlFor="image">Image</label>
                        <Field name="image" type="text"  className=' border rounded-full  border-gray-300 outline-none px-3 py-2' />
                        <p className='text-red-500'>
                        <ErrorMessage  name="image" />
                        </p>
                       </div>

                       <div className=' flex flex-col  w-full'>
                       <label htmlFor="title">Title</label>
                        <Field name="title" type="text"  className=' border rounded-full  border-gray-300 outline-none px-3 py-2' />
                        <ErrorMessage name="title" />
                       </div>

                        <div className=' flex flex-col  w-full'>
                        <label htmlFor="info">Info </label>
                        <Field name="info" type="text"  className=' border rounded-full  border-gray-300 outline-none px-3 py-2' />
                        <ErrorMessage name="info" />
                        </div>
                            <div className=' text-center'>
                            <button type="submit" className='bg-main-color rounded-full px-6  py-3'>Save</button>

                            </div>
                        </Form>

                   
                </Formik>

              
           

      
            </div>
        </div>
    )
}

export default AddPage