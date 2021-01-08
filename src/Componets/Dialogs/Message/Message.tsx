import style from "../Dialogs.module.css";
import React from "react";
import {messageType} from "../../../redux/state";


function Message(props: messageType) {
    return (
        <div>
            <div key={props.id} className={style.message}>{props.message}</div>
        </div>
    )
}

export default Message