import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {dialogType} from "../../../redux/state";




function DialogItem(props: dialogType) {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <div className={style.wrapper}>
                <div className={style.item}>
                    <img src={props.url} className={style.img}></img>

                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
            </div>
        </div>
    )
}

export default DialogItem