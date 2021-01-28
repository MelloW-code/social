import React from 'react';
import userPhoto from "../../assets/images/user.png";
import axios from "axios";


class Users extends React.Component<any, any, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>

                {
                    this.props.users.map((u: any) => <div key={u.id}>
                        <div>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}> follow </button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}> unfollow </button>
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
}

export default Users