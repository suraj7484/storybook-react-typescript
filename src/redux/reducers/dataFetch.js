import { CALL_DATA } from "../actions/constants";

export const InitialState = {
    data: []
}

export const dataFetch = (state = InitialState , action) => {
    switch (action.type) {
        case CALL_DATA:
            return {
                ...state,
                data: action.payload
            }
        default: 
            return
    }
}