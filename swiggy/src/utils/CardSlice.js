import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        addCart:(state,action)=>{
            let existingItem=state.find(item=>item.id===action.payload.id)
            if(existingItem){
                    existingItem.quantity++
            }
            else{
                state.push(action.payload)
            }
        },
        removeItem:(state,action)=>{
            let existingItem=state.find(item=>item.id===action.payload.id)
            if(existingItem){
                if(existingItem.quantity>1){
                    existingItem.quantity--
                }
                else{
                    return state.filter(item=>item.id!==action.payload.id)
                }
            }
        },
        deleteItem:(state,action)=>{
            let existingItem=state.find(item=>item.id===action.payload.id)
            if(existingItem){     
                return state.filter(item=>item.id!==action.payload.id)
            }
        }
    }
})

export default cartSlice.reducer;
export const{addCart,removeItem,deleteItem}=cartSlice.actions;