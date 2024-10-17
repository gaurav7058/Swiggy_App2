import {configureStore} from "@reduxjs/toolkit";
import CardSlice from "./CardSlice";
import searchSlice from "./SearchSlice";
const store=configureStore({
    reducer:{
        cart:CardSlice,
        Search:searchSlice
    }
})

export default store