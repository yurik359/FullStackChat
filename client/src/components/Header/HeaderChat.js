
import './header.css'

import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderChat = () =>{
    
    const {currentUser,setCurrentUser} = useContext(AuthContext)
    const navigate = useNavigate()
   
console.log(currentUser)
    const handleLogOut = () => {
        localStorage.clear();

        navigate('/login')
        setCurrentUser('')
        
    }
    return (
        <div className="header">
            <div className="header__chat-name"  >Yuri Chat</div>
            <div className="header__user-name">{currentUser.nickname}</div>
            <div className="header__logout-btn" onClick={handleLogOut}>Logout</div>
        </div>
        )
}


export default HeaderChat