import {AddPostActionType, postType, profilePageType, UpdateNewPostTextActionType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'Hello', likes: 5},
        {id: 2, message: 'Fck u', likes: 2},
        {id: 3, message: 'beep-beep', likes: 3}
    ],
    newPostText: ''

}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: postType = {
                id: 4,
                message: state.newPostText,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state, newPostText: action.newText}
            //state.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}
export let addPostAC = (newPostText: string): AddPostActionType => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    }
}
export let updateNewPostTextAC = (text: string): UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
