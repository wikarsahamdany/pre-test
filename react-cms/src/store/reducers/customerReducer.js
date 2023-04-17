const initialState = {
    customers : []
}

export default function customerReducer(state = initialState, action){
    if(action.type === "FETCH_USERS"){
        return {
            ...state,
            customers: action.payload
        }
        
    }else if (action.type === "FETCH_USERS_SEARCH"){
        return {
            ...state,
            customers : action.payload
        }
    }
    else{
        return state
    }
}