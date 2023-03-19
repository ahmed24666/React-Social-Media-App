import React, { useContext } from 'react'
import "./navbar.scss"
// -------icons------
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// ----------
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';


export function Navbar() {

    const {toggle, darkMode} = useContext(DarkModeContext)
    const {currentUser, login} = useContext(AuthContext)

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                <span>Social App</span>
                </Link>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }} >
                <HomeOutlinedIcon style={{cursor:"pointer"}}/>
                </Link>
                {darkMode ? <WbSunnyOutlinedIcon style={{cursor:"pointer"}} onClick={toggle}/> :<DarkModeOutlinedIcon style={{cursor:"pointer"}} onClick={toggle}/>}
                <GridViewOutlinedIcon style={{cursor:"pointer"}}/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text"placeholder="Search . . ." />
                </div>
            </div>
            <div className="right">
                <Link to={`/profile/1`} style={{ textDecoration: "none", color: "inherit" }}>

                <PersonOutlinedIcon style={{cursor:"pointer"}}/>
                </Link>
                <MailOutlinedIcon style={{cursor:"pointer"}}/>
                <NotificationsOutlinedIcon style={{cursor:"pointer"}}/>
                <Link to={`/profile/1`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="user" style={{cursor:"pointer"}}>
                    <img src={currentUser.ProfilePic} alt="" />
                    <span>{currentUser.name}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}
