import React from 'react'
import {
    ActionsTypes, addPostAC,
    updateNewPostTextAC,
} from "../../../redux/state";
import MyPosts from "./MyPosts";
import {RootStateRedux} from "../../../redux/redux-store";


type PropsType = {

    state: RootStateRedux
    dispatch: (action: ActionsTypes) => void
}


function MyPostsContainer(props: PropsType) {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            //props.addPost()
            props.dispatch(addPostAC(props.state.profilePage.newPostText))
        }
    }
    let onPostChange = (text: string) => {
        if (newPostElement.current) {
            let action = updateNewPostTextAC(text)
            props.dispatch(action)
        }
    }

    return (
        <div>
            <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     profilePage={props.state.profilePage}
                     dispatch={props.dispatch}
            />
        </div>

    )
}

export default MyPostsContainer