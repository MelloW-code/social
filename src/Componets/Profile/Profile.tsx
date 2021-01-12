import React from 'react'
import style from './Profile.module.css'
import {ActionsTypes, profilePageType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootStateRedux} from "../../redux/redux-store";



type PropsType = {
    state: RootStateRedux
    dispatch: (action: ActionsTypes) => void
    /*newPostText: string*/
}

function Profile(props: PropsType) {
    debugger
    return (
        <div className={style.content}>
            <div className={style.local_header}>
            </div>
            <div>ava+desc</div>
            <MyPostsContainer state={props.state}  dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile