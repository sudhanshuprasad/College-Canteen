import React, { useContext, useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import urlContext from '../context/api_url/urlContext';
import { actionCreaters } from "../state/index";
import { Link } from "react-router-dom"

function Profile(props) {

    const host = useContext(urlContext)
    const params = useParams();
    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    const theme = useSelector(state => state.theme);


    const [userData, setUserData] = useState({ name: props.user })

    const handleLogout = () => {
        dispatch(actionCreaters.setLogin(false))
        localStorage.removeItem("authToken");
    }

    useMemo(() => {
        const url = `${host}/api/auth/getuser`
        fetch(url, {
            "method": "GET",
            "headers": {
                'Content-Type': 'application/json',
                "authToken": localStorage.getItem("authToken")
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUserData(data);
            })
    }, [host])

    useEffect(() => {

        // const url = `${host}/api/auth/getuser`
        // fetch(url, {
        //     "method": "GET",
        //     "headers": {
        //         'Content-Type': 'application/json',
        //         "authToken": localStorage.getItem("authToken")
        //     }
        // })
        // .then(response=>response.json())
        // .then(data=>{
        //     console.log(data);
        //     setUserData(data);
        // })
    }, []);

    return (
        <div>
            This is profile
            <br></br>
            {params?.user}
            <hr></hr>
            {userData?.name}<br />
            {userData?.email}<br />
            {userData?.phone}<br />
            {userData?.timestamp}<br />
            <hr />
            <li onClick={() => {
                dispatch(actionCreaters.setThemeDark(!theme));
            }}>Theme</li>
            <button onClick={handleLogout}>
                <p id='logout'>Logout</p>
            </button>
        </div>
    )
}

export default Profile
