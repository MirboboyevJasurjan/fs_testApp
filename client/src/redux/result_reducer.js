// import { createSlice } from "@reduxjs/toolkit";

// export const resultReducer = () => createSlice({
//     name: 'result',
//     initialState : {
//         userId : null,
//         result : []
//     },
//     reducers : {
//         setUserId: (state, action) =>{
//             state.userId = action.payload
//         }
//     }

// })

// // export const resultSlice = resultReducer();

// export const { setUserId } = resultSlice.actions;

// export default resultSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload
        }
    }
});

export const { setUserId } = resultSlice.actions;

export default resultSlice.reducer;
