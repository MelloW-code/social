import React from 'react'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

const Users = (props: any) => {
    debugger
    if (props.users.length === 0){

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            props.setUsers(response.data.items)
        })


    }
    return (
        <div>
            {
                props.users.map((u:any) => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small: userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                ? <button onClick={ () => { debugger; props.unfollow(u.id) } }> follow </button>
                                    : <button onClick={ () => { props.follow(u.id) } }> unfollow </button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>

                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                           {/* <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                            <div>{u.followed}</div>*/}
                        </div>
                    </div>
                </div>)
            }

        </div>
    )
}

export default Users