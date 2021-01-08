import React from 'react'
import  style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import  {ActionsTypes, profilePageType} from "../../redux/state";


type PropsType = {
    profilePage: profilePageType
    dispatch:(action:  ActionsTypes) => void
    /*newPostText: string*/
}

function Profile(props:PropsType ) {
    debugger
    return (
        <div className={style.content}>
            <div className={style.local_header}>
            </div>
            <div>ava+desc</div>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

export default Profile