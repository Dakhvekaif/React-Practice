import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(() =>{
            dispatch(logout())
        }).catch((error) => console.log("Error at logoutHandler", error) )
    }
  return (
    <div>LogoutBtn</div>
  )
}

export default LogoutBtn