import { useState } from "react"
import Categories from "../components/Categories/Categories"
import Navbar from "../components/Navbar/Navbar"
import Products from "../components/Products/Products"
import SliderComp from "../components/SliderComp/SliderComp"
import Sorting from "../components/Sorting/Sorting"


function Home() {
    const [sort,setSort] = useState('')
    const [category,setCategory] = useState('')

  return (
    <>
      <Navbar />
      <SliderComp />
      <Sorting setSort={setSort}/>
      <div className="flex px-[100px]  min-h-[500px]">
          <Categories setCategory={setCategory}/>
          <Products category={category} sort={sort}/>
      </div>
    </>
  )
}

export default Home
