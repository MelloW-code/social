const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
       /* {
            id: 1,
            followed: true,
            name: 'alex',
            status: 'hello, my friends!',
            location: {city: 'minsk', country: 'belarus'}
        },
        {
            id: 2,
            followed: false,
            name: 'gena',
            status: 'go cs?',
            location: {city: 'moscow', country: 'russia'}},
        {
            id: 3,
            followed: true,
            name: 'valera',
            status: 'It\'s time to burn the tires',
            location: {city: 'kiev', country: 'ukraine'}
        }*/
    ]
}

export type InitialStateType = typeof initialState

const usersReducer = (state: any = initialState, action: any): any => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u:any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u:any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID})
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: number) => ({type: SET_USERS, users})

export default usersReducer