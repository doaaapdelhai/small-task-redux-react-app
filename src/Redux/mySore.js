import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";  //slice


 export const myStore = configureStore({

    reducer:{   // this is obj cuz if it have one or more reducer=[doaa : counterReducer] or anyname : say for example cartReducer

        doaa : counterReducer    // name this slice[doaa] , and main slice [counterReducer] import from [./counterSlice]
        
    }
})

// store => into slices
// counterReducer => doaa
//  say fro example cartSlice => esraa 
