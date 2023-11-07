import React from 'react'

function Sorting({setSort}) {
  return (
    <div className='bg-gray-400 my-10 p-5 flex items-center justify-end'>
      <select onChange={(e) => setSort(e.target.value)} className='bg-white py-3 px-5'>
        <option disabled value={""}>SEÇİNİZ</option>
        <option value={"inc"}>Artan</option>
        <option value={"dec"}>Azalan</option>
      </select>
    </div>
  )
}

export default Sorting
