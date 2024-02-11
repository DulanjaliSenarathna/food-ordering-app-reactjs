import { createContext, useReducer } from "react";

const CartContext = createContext({
    items:[],
    addItem: (item) =>{},
    removeItem: (id) =>{}
});

function cartReducer(state,action){
    if(action.type === 'ADD_ITEM'){
        const exsistingCartItemIndex = state.items.findIndex(
            (item)=> item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if(exsistingCartItemIndex >-1){
            const existingItem = state.items[exsistingCartItemIndex];
            const updatedItem = {...existingItem,
            quantity: existingItem.quantity+1
            }
            updatedItems[exsistingCartItemIndex] = updatedItem;
        }else{
            updatedItems.push({...action.item, quantity:1});
        }

        return {...state, items:updatedItems};
    }
    if(action.type === 'REMOVE_ITEM'){
        const exsistingCartItemIndex = state.items.findIndex(
            (item)=> item.id === action.id
        );

        const existingCartItem = state.items[exsistingCartItemIndex];
        const updatedItems = [...state.items];
        if(existingCartItem.quantity === 1){
            
            updatedItems.splice(exsistingCartItemIndex,1);
        }else{
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity -1
            };

            updatedItems[exsistingCartItemIndex] = updatedItem;
        }

        return {...state, items:updatedItems};
    }

    return state;
}

export function CartContextProvider({children}){
   const [cart,dispatchCartAction]= useReducer(cartReducer,{items:[]});

   function addItem(item){
    try {
        dispatchCartAction({type: 'ADD_ITEM',item}) 
    } catch (error) {
        console.log(error);
    }
    
   }

   function removeItem(id){
    try {
        dispatchCartAction({type: 'REMOVE_ITEM',id})
    } catch (error) {
        console.log(error);
    }
   
   }

   const cartContext = {
    items:cart.items,
    addItem,
    removeItem
   }

   console.log(cartContext);
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext;