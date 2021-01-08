import React from 'react';
import './App.css';
import Header from './Componets/Header/Header'
import Navbar from "./Componets/Navbar/Navbar";
import Profile from "./Componets/Profile/Profile";
import Dialogs from "./Componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./Componets/News/News";
import Music from "./Componets/Music/Music";
import Settings from "./Componets/Settings/Settings";
import {
    ActionsTypes,
    /*dialogPageType,
    profilePageType,*/
    rootStateType,
   /* sidebarFriendsType,
    StoreType*/
} from "./redux/state";
import {RootStateRedux} from "./redux/redux-store";

type PropsType = {
    state: RootStateRedux
    dispatch:(action:  ActionsTypes) => void
    // store: StoreType
    /*profilePage: profilePageType
    dialogsPage: dialogPageType
    sidebar: sidebarFriendsType*/
}

function App(props: PropsType) {
debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props.state.sidebar}
                        dispatch={props.dispatch}/>

                <div className='app_wrapper_content'>
                    <Route  path='/dialogs' render = {
                        () => <Dialogs dialogsPage={props.state.dialogsPage}
                                       dispatch={props.dispatch}
                        />}/>

                    <Route  path='/profile' render = {
                        () => <Profile profilePage={props.state.profilePage}
                                       dispatch={props.dispatch}
                        />}/>
                    <Route  path='/news' component={News}/>
                    <Route  path='/music' component={Music}/>
                    <Route  path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
