import { configureStore } from "@reduxjs/toolkit";
import IssueSlice from "./Issue-slice";



const store = configureStore({
    reducer:{
        issues: IssueSlice.reducer
    }
});

export default store;