import React from "react";

import {
    ActionsTypes,
    dialogPageType,
    sendMessageAC,
    updateNewMessageBodyAC,
    updateNewPostTextAC
} from '../../redux/state'
import Dialogs from "./Dialogs";
import {RootStateRedux} from "../../redux/redux-store";


type PropsType = {
    //dialogsPage: dialogPageType
    dispatch: (action: ActionsTypes) => void
    state: RootStateRedux
}

function DialogsContainer(props: PropsType) {

    let urlMessageElement = React.createRef<HTMLTextAreaElement>()

    let sendMessage = () => {
        if (urlMessageElement.current) {
            props.dispatch(sendMessageAC(props.state.dialogsPage.newMessageBody))
        }
    }

    let onMessageChange = () => {
        if (urlMessageElement.current) {
            let text = urlMessageElement.current.value
            props.dispatch(updateNewMessageBodyAC(text))

        }
    }


    return (
        <Dialogs dispatch={props.dispatch}
                 dialogsPage={props.state.dialogsPage}
                 sendMessageChange={sendMessage}
                 onMessageChange={onMessageChange}
        />
    )
}


export default DialogsContainer
