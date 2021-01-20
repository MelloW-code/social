import React from "react"
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {ActionsTypes, sidebarFriendsType} from "../../redux/state";

type PropsType = {
    /*sidebar: sidebarFriendsType
    dispatch:(action:  ActionsTypes) => void*/
}

function Navbar(props: PropsType) {
    /*let friendsElements = props.sidebar.friends
        .map(friend => <Friends id={friend.id}  name={friend.name} url={friend.url}/> )*/
    return (
        <nav className={style.nav}>

            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/profile' className={style.link} activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' className={style.link} activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' className={style.link} activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' className={style.link} activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' className={style.link} activeClassName={style.active}>Settings</NavLink>
            </div>

            <div>
                <h3>Friends</h3>
                {/*{friendsElements}*/}
            </div>

        </nav>
    )
}

export default Navbar