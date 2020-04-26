import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALRET } from "./types"

const initialState = {
    loading: false,
    alert: null,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
        case SHOW_LOADER: 
            return {...state, loading: true}
        case HIDE_LOADER: 
            return {...state, loading: false}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_ALRET: 
            return {...state, alert: null}
    }
}