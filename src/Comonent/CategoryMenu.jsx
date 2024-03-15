import { useEffect, useState } from "react"
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { SetCategory } from "../Redux/Slices/CategorySlice";



const CategoryMenu = () => {

  const[categories,SetCategories]= useState([]);
  const listUniqueCategory =()=>{
    const uniquCategoes= [...new Set(FoodData.map((food)=>food.category))];
    SetCategories(uniquCategoes)
    console.log(uniquCategoes)
  }

  useEffect(()=>{
 listUniqueCategory();
  },[]);

  const dispatch = useDispatch();

  const selectCategory = useSelector((state)=>state.category.category)
  return (
    <div className="mx-6">
     <h3 className="text-xl font-semibold">Find the best food</h3>
     <div className="my-5 flex gap-3  overflow-x-scroll scroll-smooth lg:overflow-x-hidden">

     <button 
            onClick={()=>dispatch(SetCategory("All"))}
            
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectCategory==="All"
             && "bg-green-500 text-white"}`}>All</button>
        
        {
          categories.map((category,index)=>{
            return  <button 
            onClick={()=>dispatch(SetCategory(category))}
            key={index}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white  ${selectCategory===category
              && "bg-green-500 text-white"}`}>{category}</button>
          })
        }
        {/* <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Lunch</button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Breakfast</button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Dinner</button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Snacks</button> */}
        </div>
    </div>
  )
}

export default CategoryMenu
