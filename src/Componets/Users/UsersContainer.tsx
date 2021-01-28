import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import {Dispatch} from "redux";


let mapStateToProps = (state:any) => {
    return {
        users:state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID:number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID:number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Users)