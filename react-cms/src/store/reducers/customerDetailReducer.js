const initialState = {
    detail : {}
}

export default function customerDetailReducer(state = initialState, action){
    if(action.type === "FETCH_USERS_ID"){
        return {
            ...state,
            detail: action.payload
        }
    }else{
        return state
    }
}