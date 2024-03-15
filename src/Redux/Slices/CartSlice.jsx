import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const { id, qty } = action.payload;
      const existingItem = state.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.qty += qty; // Increase quantity if item exists
      } else {
        state.push(action.payload); // Add as new item if not found
      }
    },
    remove(state, action) {
        const itemIdToRemove = action.payload.id;
        return state.filter(item => item.id !== itemIdToRemove);
      },
    
      
    incrementQuantity(state, action) {
      const { id } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      }
    },
    decrementQuantity(state, action) {
      const { id } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
      }
    }
  }
});

export const { add, remove, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
