import {createSlice} from "@reduxjs/toolkit"

const searchSlice=(createSlice({
    name:"search",
    initialState:[],
    reducers:{
        addSearchResult:(state,action)=>{
            const {query,results}=action.payload
            console.log(query)
            console.log(results)
            let foundItem=state.find((item)=>{
                return item==query
            })
            let tem=query.toLowerCase()
            if(!foundItem){
                state.push({query:tem,results})
            }
            else{

            }
        }
    }

}))
export default searchSlice.reducer
export const {addSearchResult} =searchSlice.actions