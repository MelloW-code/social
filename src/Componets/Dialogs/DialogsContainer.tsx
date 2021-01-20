import {dialogPageType} from '../../redux/state'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateRedux} from "../../redux/redux-store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";


type MSTPType = {
    dialogsPage: dialogPageType
}

type MDTPType = {
    sendMessage: (text: string) => void
    onMessageChange: (text: string) => void
}

export type DialogsType = MSTPType & MDTPType

let mapStateToProps = (state: RootStateRedux): MSTPType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MDTPType => {
    return {
        sendMessage: (newMessage: string) => {
            dispatch(sendMessageAC(newMessage))
        },
        onMessageChange: (text:string) => {
            dispatch(updateNewMessageBodyAC(text))
        },

    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
