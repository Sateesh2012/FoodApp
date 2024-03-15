import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name:"category",
    initialState:{
        category:"All"
    },

    reducers:{
        SetCategory:(state,action)=>{
            state.category = action.payload;
        }
    }
})

export const {SetCategory} = CategorySlice.actions;
export default CategorySlice.reducer