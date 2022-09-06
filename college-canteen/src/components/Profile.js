import React, { useContext, useEffect, useState } from 'react'
import urlContext from '../context/api_url/urlContext';

function Profile(props) {

    const host = useContext(urlContext)

    const [userData,setUserData] = useState({name:props.user})

    useEffect(() => {

        const url = `${host}/api/auth/getuser`
        fetch(url, {
            "method": "GET",
            "headers": {
                'Content-Type': 'application/json',
                "authToken": localStorage.getItem("authToken")
            }
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setUserData(data);
        })
    }, []);

    return (
        <div>
            This is profile
            <hr></hr>
            {userData?.name}<br/>
            {userData?.email}<br/>
            {userData?.phone}<br/>
            {userData?.timestamp}<br/>
        </div>
    )
}

export default Profile
