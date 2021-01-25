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
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
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
