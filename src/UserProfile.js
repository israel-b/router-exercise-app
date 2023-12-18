import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    const [user, setUser] = useState({});
    
    const params = useParams();

    return (
        <div>
            <p>User profile</p>
            <p>{JSON.stringify(params) }</p>
        </div>
    );
}

export default UserProfile;