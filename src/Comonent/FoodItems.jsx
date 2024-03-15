import FoodCart from "./FoodCart";
import FoodData from "../data/FoodData";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const handleToast = (name) => toast.success(`Added ${name}`);

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const searchQuery = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          const matchesCategory = category === "All" || category === food.category;
          const matchesSearch = searchQuery === "" || food.name.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesCategory && matchesSearch;
        }).map((food) => (
          <FoodCart
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
