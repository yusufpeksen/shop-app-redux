import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

function Categories({setCategory}) {

    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories)

    console.log(categories , "categories")

    useEffect(() => {
        dispatch(getCategories())
    },[dispatch])

  return (
    <div className='w-1/6 bg-gray-400 py-4 max-h-screen'>
        <div className='text-center text-[32px] px-6'>
            Categories
        </div>
        {
            categories?.map((category , i) => (
                <div onClick={()=>setCategory(category)} className='px-4 py-1 cursor-pointer transition-colors duration-300 hover:bg-gray-500' key={i}>
                    {category}
                </div>
            ))
        }
    </div>
  )
}

export default Categories
