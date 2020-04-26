import { CREATE_POST, FETCH_POST, SHOW_LOADER, HIDE_LOADER, HIDE_ALRET, SHOW_ALERT } from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return async function(dispatch) {
        try {
            dispatch(showLoader())
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const json = await posts.json()
            dispatch({
                type: FETCH_POST,
                payload: json
            })
            dispatch(hideLoader())
        } catch(err) {
            dispatch(showAlert('Что-то пошло не так'))
            dispatch(hideLoader())
        }

    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text,
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 5000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALRET,
    }
}

