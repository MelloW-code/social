
import {postType} from "./state";

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

export const profileReducer = (state: any = initialState, action: any) => {
    if (action.type === ADD_POST) {
        let newPost: postType = {
            id: 4,
            message: state.newPostText,
            likes: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''


    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText

    }
        return state
}