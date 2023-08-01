import React, { useContext, useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import urlContext from '../context/api_url/urlContext';
import { actionCreaters } from "../state/index";
import { Link } from "react-router-dom"
import style from "./style/Profile.module.css"

function Profile(props) {

    const host = useContext(urlContext)
    const params = useParams();
    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    const theme = useSelector(state => state.theme);
    const navigate = useNavigate();

    const [userData, setUserData] = useState({ name: props.user });

    const handleLogout = () => {
        dispatch(actionCreaters.setLogin(false));
        localStorage.removeItem("authToken");
        navigate('/home');
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
        <div className={!theme?style.profile:style.profile_dark}>
            <h1 className='text-3xl font-bold underline'>
            This is your profile
            </h1>
            <br></br>
            {params?.user}
            <hr></hr>
            <h1>
                Hello {userData?.name}
                <img  id={style.profile_pic} src={userData.profileUrl||'https://img.icons8.com/ios/50/null/user-male-circle--v1.png'}></img><br />
            </h1>
            {userData?.email}<br />
            {userData?.phone}<br />
            <br /><br />
            You joined us at {userData?.timestamp}<br />
            <hr />
            <button className={!theme?style.btn:style.btn_dark} onClick={() => {
                dispatch(actionCreaters.setThemeDark(!theme));
            }}>Change Theme</button>
            <br/>
            <button className={!theme?style.btn:style.btn_dark} onClick={()=>{navigate('/order')}}>
                {/* <Link to={'/order'}>Order</Link> */}
                My Order
            </button>
            <hr/>
            
            <button className={!theme?style.btn:style.btn_dark} onClick={handleLogout}>
                LogOut
            </button>
        </div>
    )
}

export default Profile
