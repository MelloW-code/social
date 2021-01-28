import React, {KeyboardEvent} from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";

import {ProfileType} from "./MyPostsContainer";

// type PropsType = {
//     profilePage: profilePageType
//     addPost: () => void
//     updateNewPostText: (text: string) => void
//     dispatch: (action: ActionsTypes) => void
//     // newPostText: string
// }


function MyPosts(props: ProfileType) {

    let postElements = props.profilePage.posts
        .map(post => <Post message={post.message} likes={post.likes} id={post.id}/>)


    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            onAddPost();
        }
    }


    let onAddPost = () => {
        if (newPostElement.current) {
            //props.addPost()
            props.addPost(props.profilePage.newPostText)
        }
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.onPostChange(text)

        }
    }

    return (
        <div className={style.wrapper_wrapper}>
            <div className={style.wrapper_mypost}>
                <div className={style.text_wrapper}>
                    <div className={style.textarea}>
                        <textarea onKeyPress={onKeyPressHandler} onChange={onPostChange}
                                  placeholder="Remember, be nice!" cols={125} rows={4}
                                  ref={newPostElement} value={props.profilePage.newPostText}/>
                    </div>
                    <div className={style.add_post}>
                        <button onClick={onAddPost}>add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {postElements}
                </div>
            </div>
        </div>

    )
}

export default MyPosts