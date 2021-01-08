import React from "react";
import style from './friends.module.css'
import {friendType} from "../../../redux/state";

function Friends(props: friendType) {
    return(
        <div>
            <div className={style.wrapper}>

                <div className={style.item}>
                <img src={props.url}></img>
                    {props.name}
                </div>
            </div>


        </div>
    )
}

export default Friends