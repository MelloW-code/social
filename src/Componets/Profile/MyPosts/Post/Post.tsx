import React from 'react'
import style from "./Post.module.css";
import {postType} from "../../../../redux/state";



function Post(props: postType) {
    return (
        <div className={style.item}>
            <div className={style.img_wrapper}>
                <img className={style.img} src='https://img1.freepng.ru/20180529/gvy/kisspng-female-youtube-in-my-frame-of-mind-female-avatar-5b0cd573872302.5131979915275677315535.jpg'/>
            </div>
            <div className={style.message}>
                {props.message}
            </div>
            <div className={style.likes}>
                Likes {props.likes}
            </div>

        </div>
    )
}

export default Post