import { useDispatch } from "react-redux"
import { setSearch } from "../Redux/Slices/SearchSlice"


const Navbar = () => {
  const dispatch = useDispatch()
  return (
    
    <nav className="flex flex-col lg:flex-row justify-between mx-6 mb-10">

    <div className="mb-4 lg:mb-0">
      <h3 className="text-xl font-bold text-gray-600">
        {new Date().toUTCString().slice(0, 16)}
        </h3>
      <h1 className="text-2xl  font-bold">Flavoro Foods</h1>
    </div>
  
    <div>
      <input
        type="search"
        name="search"
        id=""
        placeholder="Search Here"
        autoComplete="off"
        onChange={(e)=>dispatch(setSearch(e.target.value))}
        className="p-3  border border-gray-400 text-sm rounded-lg focus:outline-none focus:border-indigo-500 w-full lg:w-[25vw]"
      />
    </div>
  
  </nav>
  
    
  )
}

export default Navbar
