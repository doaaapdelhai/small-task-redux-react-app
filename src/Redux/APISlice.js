import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";

  export const  pizzaFunc =  createAsyncThunk('api/getPizza' , async function () { 
   const {data} =await axios.get('https:/forkify-api.herokuapp.com/api/search?q=pizza'); 
   console.log(data.recipes);
     return data;

 } )

const apiSlice = createSlice({

    name :'api' ,

    initialState : {
    allPizza:null,
    },
    extraReducers: function (builder) {  
        // how to handle all functions createAsyncThunk
           
        builder.addCase(pizzaFunc.fulfilled , function (state , action) { 
            state.allPizza = action.payload.recipes

        //   console.log(action.payload.recipes);

         }  )
    }
})

export default apiSlice.reducer