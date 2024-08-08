import { createSlice } from '@reduxjs/toolkit';

const itemList =
  localStorage.getItem('cartList') !== null
    ? JSON.parse(localStorage.getItem('cartList'))
    : [];
const total =
  localStorage.getItem('cartTotal') !== null
    ? JSON.parse(localStorage.getItem('cartTotal'))
    : 0;
const totalQuantity =
  localStorage.getItem('cartQuantity') !== null
    ? JSON.parse(localStorage.getItem('cartQuantity'))
    : 0;

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemList: itemList,
    totalQuantity: totalQuantity,
    total: total,
    showCart: false,
    changed: false,
  },
  reducers: {
    add(state, action) {
      state.changed = true;
      const newItem = action.payload;

      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        state.totalQuantity++;
        state.total += newItem.price;
      } else {
        state.itemList.push({
          imgUrl: newItem.image,
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
        state.totalQuantity++;
        state.total += newItem.price;
      }

      setCartListFunc(
        state.itemList.map((item) => item),
        state.total,
        state.totalQuantity
      );
    },
    remove(state, action) {
      state.changed = true;
      const removedItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === removedItem.id
      );
      state.totalQuantity--;
      state.total -= removedItem.price;
      if (existingItem.quantity === 1 && state.totalQuantity === 0) {
        state.itemList = state.itemList.filter(
          (item) => item.id !== removedItem.id
        );
        setCartListFunc(
          (state.itemList = []),
          (state.total = 0),
          (state.totalQuantity = 0)
        );
      } else if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter(
          (item) => item.id !== removedItem.id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= removedItem.price;
      }

      setCartListFunc(
        state.itemList.map((item) => item),
        state.total,
        state.totalQuantity
      );
    },
  },
});

// adding this function to prevent repeat code
const setCartListFunc = (itemList, total, totalQuantity) => {
  localStorage.setItem('cartList', JSON.stringify(itemList));
  localStorage.setItem('cartTotal', JSON.stringify(total));
  localStorage.setItem('cartQuantity', JSON.stringify(totalQuantity));
};

export const { add, remove } = cartSlice.actions;
export default cartSlice;
