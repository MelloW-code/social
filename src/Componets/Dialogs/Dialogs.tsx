import React, {KeyboardEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    dialogPageType,


} from '../../redux/state'
import {DialogsType} from "./DialogsContainer";

type PropsType = {
    dialogsPage: dialogPageType
    dispatch: (action: ActionsTypes) => void
    sendMessage: () => void
    onMessageChange: () => void
    //state: RootStateRedux

}

function Dialogs(props: DialogsType) {
debugger
    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} url={dialog.url}/>)
    let messagesElements = props.dialogsPage.messages
        .map(message => <Message id={message.id} message={message.message}/>)

    let urlMessageElement = React.createRef<HTMLTextAreaElement>()

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            sendMessage();
        }
    }

    let sendMessage = () => {
        if (urlMessageElement.current) {
            props.sendMessage(props.dialogsPage.newMessageBody)
        }
    }

    let onMessageChange = () => {
    debugger
        if (urlMessageElement.current) {
            let text = urlMessageElement.current.value
            props.onMessageChange(text)
        }
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onKeyPress={onKeyPressHandler} onChange={onMessageChange} ref={urlMessageElement}
                          value={props.dialogsPage.newMessageBody}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}


export default Dialogs
