import Cart from "../Comonent/Cart"
import CategoryMenu from "../Comonent/CategoryMenu"
import FoodItems from "../Comonent/FoodItems"
import Navbar from "../Comonent/Navbar"


const Home = () => {
  return (
    <>
     <Navbar />  
     <CategoryMenu />
     <FoodItems />
     <Cart />
    </>
  )
}

export default Home