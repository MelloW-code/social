import {messagesTypes, SendMessageActionType, UpdateNewMessageBodyTextActionType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
    dialogs: [
        {id: 1, name: 'QQ', url: 'https://static.probusiness.io/720x480c/n/0d/4/pora-valit-4.jpg'},
        {id: 2, name: 'Anna', url: 'https://www.spletnik.ru/img/2016/04/ayna/20160421_girlfriend_tv_11.jpg'},
        {
            id: 3,
            name: 'Mary',
            url: 'https://youopen.info/wp-content/uploads/2019/03/36da4a7187cf869bc2c83f54c036472e.jpg'
        },
        {
            id: 4,
            name: 'Olga',
            url: 'https://domashniy.ru/upload/resize_cache/iblock/699/820_10000_148e4c3f6581a67d536456d26c5cacb61/69942ca6bbf4b953e40a833240f2cccd.jpg'
        }
    ],

    messages: [
        {id: 1, message: 'hello'},
        {id: 2, message: 'bla bla bla bla'},
        {id: 3, message: 'fck u fdg'},
        {id: 4, message: 'hello'}
    ],
    newMessageBody: ''
}

export type InitialStateType = typeof initialState


export const dialogsReducer = (state: InitialStateType = initialState, action: any): any => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage: messagesTypes = {
                id: 4,
                message: state.newMessageBody,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageBody = ''
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state, newMessageBody: action.newMessage}
            //state.newMessageBody=action.newText
            return stateCopy
        }
        default:
            return state
    }

}

export let updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyTextActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: body
    }
}
export let sendMessageAC = (newMessage: string): SendMessageActionType => {
    return {
        type: SEND_MESSAGE,
        message: newMessage
    }
}