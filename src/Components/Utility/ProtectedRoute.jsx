import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { GetLoggedUser } from '../../Redux/Slice/Auth/AuthThunk'

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({allowedRoles}) => {
    const dispatch = useDispatch()
    const res = useSelector((state) => state.auth.user)
  useEffect(() => {
    dispatch(GetLoggedUser())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    const accessToken = localStorage.getItem('token')
    let auth = {'token':accessToken,'role':res?.data?.role}
    // eslint-disable-next-line react/prop-types
    const isAllowed = allowedRoles?.includes(auth.role)
    return(
        auth.token && isAllowed ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoute