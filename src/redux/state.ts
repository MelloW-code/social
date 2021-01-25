import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type messageType = {
    id: number
    message: string

}
export type messagesTypes = {
    id: number
    message: string
    likes: number
}
export type dialogType = {
    id: number
    name: string
    url: string
}

export type postType = {
    id: number
    message: string
    likes: number
}

export type friendType = {
    id: number
    name: string
    url: string
}
export type sidebarFriendsType = {
    friends: Array<friendType>
}

export type profilePageType = {
    posts: Array<postType>
    newPostText: string
}

export type dialogPageType = {
    dialogs: Array<dialogType>
    messages: Array<messageType>
    newMessageBody: string
}

export type rootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogPageType
    sidebar: sidebarFriendsType
}
export type StoreType = {
    _state: rootStateType,
    getState: () => rootStateType,
    subscribe: (observer: any) => void,
    _callSubscriber: () => void,
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType | SendMessageActionType | UpdateNewMessageBodyTextActionType) => void
}

export type AddPostActionType = {
    type: 'ADD-POST',
    newPostText: string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE',
    message: string
}
export type UpdateNewMessageBodyTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    newMessage: string
}

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SendMessageActionType
    | UpdateNewMessageBodyTextActionType

// const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE'
//
// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hello', likes: 5},
//                 {id: 2, message: 'Fck u', likes: 2},
//                 {id: 3, message: 'beep-beep', likes: 3}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'QQ', url: 'https://static.probusiness.io/720x480c/n/0d/4/pora-valit-4.jpg'},
//                 {id: 2, name: 'Anna', url: 'https://www.spletnik.ru/img/2016/04/ayna/20160421_girlfriend_tv_11.jpg'},
//                 {
//                     id: 3,
//                     name: 'Mary',
//                     url: 'https://youopen.info/wp-content/uploads/2019/03/36da4a7187cf869bc2c83f54c036472e.jpg'
//                 },
//                 {
//                     id: 4,
//                     name: 'Olga',
//                     url: 'https://domashniy.ru/upload/resize_cache/iblock/699/820_10000_148e4c3f6581a67d536456d26c5cacb61/69942ca6bbf4b953e40a833240f2cccd.jpg'
//                 }
//             ],
//
//             messages: [
//                 {id: 1, message: 'hello'},
//                 {id: 2, message: 'bla bla bla bla'},
//                 {id: 3, message: 'fck u fdg'},
//                 {id: 4, message: 'hello'}
//             ],
//             newMessageBody: ''
//         },
//         sidebar: {
//             friends: [
//                 {id: 1, name: 'Sveta', url: 'https://ic.pics.livejournal.com/epilas/84327394/85330/85330_900.jpg'},
//                 {id: 2, name: 'Oleg', url: 'https://cs11.pikabu.ru/post_img/big/2019/06/11/6/156024391419660405.jpg'},
//                 {id: 3, name: 'Stas', url: 'https://img5.goodfon.ru/wallpaper/nbig/e/5e/evgenii-bulatov-devushka-litso-vzgliad-ruki-kamni-portret.jpg'}
//             ]
//         },
//
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//         console.log('state changed')
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._callSubscriber()
//
//     }
// }
//
//
// export default store