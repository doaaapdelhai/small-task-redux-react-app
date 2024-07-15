import { createSlice } from "@reduxjs/toolkit";

 
// 3 min properte in my createSlice
// [name] =>          //the name of my slice
// [initialState] => // firest value in my app
// [reducers] =>    // function to update in my state => === ation

 const counterSlice = createSlice({

    name: 'counter' ,

    initialState :{
        
        counter: 0
    },

    // function to update in my state
    reducers:{        //reducers = actions = my function => use despatch to update this 
        incrementCounter: function( state , action){    //not right do export [inc+] here i do this by counterSlice.actions
            state.counter+=action.payload;  // action iclode payload and type   
        },
        decrementCounter: function(state ){  
            state.counter--;
        },
        
    }
})

// counterSlice => not object incloud [name + insialvalue + reducer] nooo  ,but this is variable i created incloud[action + reducer  ....]
// createSlice =>  object incloud [name + insialvalue + reducer]
 export const {incrementCounter , decrementCounter} = counterSlice.actions; //here i doinng destract [dec-,inc+] from action cuz i wanna do export 


export default counterSlice.reducer; 
// export const counterReducer = counterSlice.reducer //=>this is true also