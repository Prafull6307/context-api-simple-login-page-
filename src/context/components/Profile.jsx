import React,{useContext} from 'react'

import Usercontext from '../Usercontext';

function Profile() {
     const {user}= useContext(Usercontext);
     
    if(!user) return <div>Please login</div>
    else return <div>Welcome {user.username} ,Your password is {user.password}</div>
}

export default Profile