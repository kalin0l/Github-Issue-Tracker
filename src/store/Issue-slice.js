import { createSlice } from "@reduxjs/toolkit";


const IssueSlice = createSlice({
    name:'issue',
    initialState:{
        username:localStorage.getItem('username'),
        repo:localStorage.getItem('repo'),
        newIssues: JSON.parse(localStorage.getItem('newIssues')),
        comments:[],
        error:''
    },
    reducers:{
        paginate(state,action){
            const numberOfEvents = action.payload
            const eventsPerPage = 10;
            const numberOfPages = Math.ceil(numberOfEvents.length/eventsPerPage);

            const newEvents = Array.from({length:numberOfPages},(_,i) => {
                const start = i * eventsPerPage;
                return numberOfEvents.slice(start,start + eventsPerPage);
            })
            state.newIssues = newEvents;

            localStorage.setItem('newIssues',JSON.stringify(state.newIssues));


        },
        setUsername(state,action){
            state.username = action.payload;
            localStorage.setItem('username',state.username)
        },
        setRepo(state,action){
            state.repo = action.payload;
            localStorage.setItem('repo',state.repo)
        },
        setComments(state,action){
            state.comments = action.payload;
        },
        setError(state,action){
            state.error = action.payload;
        }
       
    }
});

export const IssueSliceActions = IssueSlice.actions;
export default IssueSlice;