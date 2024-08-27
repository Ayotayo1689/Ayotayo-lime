import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetchResult: [], //since we are fetching a data that the initial state is an empty array
    searchInputValue: "", // this one is if the api has a search params
    pageSize:10,
    pageNumber:1,
    startDate:"",
    endDate:"", // all these are the default state
    loading: false,
    error: null,
}

export const ExampleSlice = createSlice({
    name: "example", // can give it any name this name will be added in the store.js in the whitelist array
    initialState, // this is the initial state created at the top
    reducers: {
        setSearchInput: (state, action) => {
            state.searchInputValue = action.payload; // if the api have search
        },
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload; // if the api have pagination
        },
        setEndDate: (state, action) => {
            state.endDate = action.payload; // if the api have pagination
        },
        setStartDate: (state, action) => {
            state.startDate = action.payload; // if the api have filter by date
        },
        setError: (state, action) => {
            state.error = action.payload;
          }
        // there is no page size here because the page size doesnt change
    }
})

export const { setSearchInput, setPageNumber, setEndDate, setStartDate } = ExampleSlice.actions;
export default ExampleSlice.reducer;