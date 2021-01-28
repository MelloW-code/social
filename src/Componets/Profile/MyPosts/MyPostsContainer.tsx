import React from 'react'
import {
    profilePageType,

} from "../../../redux/state";
import MyPosts from "./MyPosts";
import  {RootStateRedux} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";


type MSTPType = {
    profilePage: profilePageType
}
type MDTPType = {
    addPost: (newPostText: string) => void
    onPostChange: (text: string) => void

}

export type ProfileType = MSTPType & MDTPType

let mapStateToProps = (state: RootStateRedux): MSTPType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText))
        },
        onPostChange: (text:string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer