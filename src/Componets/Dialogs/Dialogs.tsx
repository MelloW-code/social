import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    dialogPageType,
    sendMessageAC,
    updateNewMessageBodyAC,

} from '../../redux/state'

type PropsType = {
    dialogsPage: dialogPageType
    dispatch: (action: ActionsTypes) => void
    sendMessageChange: () => void
    onMessageChange: () => void
    //state: RootStateRedux

}

function Dialogs(props: PropsType) {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} url={dialog.url}/>)
    let messagesElements = props.dialogsPage.messages
        .map(message => <Message id={message.id} message={message.message}/>)

    let urlMessageElement = React.createRef<HTMLTextAreaElement>()

    let sendMessage = () => {
        if (urlMessageElement.current) {
            props.dispatch(sendMessageAC(props.dialogsPage.newMessageBody))
        }
    }

    let onMessageChange = () => {
        if (urlMessageElement.current) {
            let text = urlMessageElement.current.value
            props.dispatch(updateNewMessageBodyAC(text))

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
                <textarea onChange={onMessageChange} ref={urlMessageElement}
                          value={props.dialogsPage.newMessageBody}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}


export default Dialogs
