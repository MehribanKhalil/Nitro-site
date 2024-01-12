import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/CommonComponents/Loader'

const AdminPage = () => {

    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchText,setSearchText] =useState('')
    const getProduct = async () => {
        const res = await axios.get("http://localhost:8000/api/product/")
        setServices(res.data)
        setIsLoading(false)
    }

    const deleteProduct = async (id) => {
        const res = await axios.delete(`http://localhost:8000/api/product/${id}`)
        // setServices(res.data)
        getProduct()
    }

    const sortProduct=(key)=>{
        const sortingProduct=[...services]
        // switch (key) {
        //     case 'inc':
        //         sortingProduct
        //         break;
        //         case 'dec':
                
        //         break;
        
        //     default:
        //         break;
        // }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const nav=useNavigate()

    


    return (
        <div className='pb-12 pt-8 page'>

            <div className=' py-5 text-center font-bold text-2xl'>
                 <h2 className='title'>Admin Page</h2>
            </div>
            <div className='px-5 md:px-32 py-6 flex justify-between '>
                <button className='border px-5 py-1' onClick={()=>nav('/add')}>Add New</button>
                <div className=' space-x-4'>
                <input type="text" placeholder='Search by name '  className=' border px-5 py-1' value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                <button className='border px-5 py-1'>A-Z</button>
                <button className='border px-5 py-1'> Z-A</button>
                </div>
            </div>

            <div class="flex flex-col px-5 md:px-32">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">Image</th>
                                        <th scope="col" class="px-6 py-4">Title</th>
                                        <th scope="col" class="px-6 py-4">Info</th>
                                        <th scope="col" class="px-6 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                       isLoading ? <Loader/>
                                       :
                                       services &&
                                       services.filter(x=>x.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())).map((item)=>(
                                       <tr class="border-b dark:border-neutral-500">
                                       <td class="whitespace-nowrap px-6 py-4 font-medium">
                                           <i className={item.image}></i>
                                       </td>
                                       <td class="whitespace-nowrap px-6 py-4">{item.title}</td>
                                       <td class="whitespace-nowrap px-6 py-4">{item.info}</td>
                                       <td class="whitespace-nowrap px-6 py-4"><button onClick={()=>deleteProduct(item._id)} className='border px-5 py-1'>del </button></td>
                                       </tr>
                                       ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage