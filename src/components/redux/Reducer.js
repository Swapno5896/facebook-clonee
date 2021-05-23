import UserPosts from "../middleSections/userPosts/UserPosts";
import loggedInUser from '../login/Login'
import { combineReducers } from "redux";


 const UserPostsreducer = (postState=UserPosts, action) => {
    if(action.type =='ADD_POST'){
        return UserPostsreducer.concate(action.payload)
    }
    return postState
}

 const LoggedInUserReducer = (UserState=loggedInUser,action) =>{
    if(action.type =='ADD_USER'){
        return UserState
    }


    return UserState
}
export const reducer = combineReducers({
    UserPosts:UserPostsreducer,
    loggedInUser:LoggedInUserReducer
})


