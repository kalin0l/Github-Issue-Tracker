import { IssueSliceActions } from "./Issue-slice";



export const getAllIssues = (username,repo) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`https://api.github.com/repos/${username}/${repo}/issues`);
            const data = await res.json();
            console.log(data);
            if(!res.ok){
                throw new Error('Invalid username or repo');
            }
            dispatch(IssueSliceActions.paginate(data))

        }catch(err) {
            dispatch(IssueSliceActions.setError(err.message))
            console.log(err);
        }
    }
}

export const getComments = (username,repo,id) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`https://api.github.com/repos/${username}/${repo}/issues/${id}/comments`);
            const data = await res.json();
            console.log(data);
            if(!res.ok){
                throw new Error(data.message ||'Cannot get the comments');
            }
            dispatch(IssueSliceActions.setComments(data));

        }catch(err){
            dispatch(IssueSliceActions.setError(err.message))
            console.log(err);
        }
    }
}