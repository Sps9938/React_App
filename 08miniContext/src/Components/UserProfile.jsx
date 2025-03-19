import React, {useContext} from "react";

import UserContext from "../Context/UserContext";

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>
    console.log(`username is: ${user.username} and password is: ${user.password}`);
    
    return  <div>Welcome {user.username}</div>
}

export default Profile