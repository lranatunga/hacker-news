import Navigation from "./NavigationBar"
import SearchBar from "./SearchBar"
import LogIn from "./SignIn"
// import logo from '../image/logo_200x200.png'
import logoCodePulse from '../image/Code-Pulse-Logo-Final.png'
import { useState} from "react"
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";


export default function Header (props){
    const [text, setText] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!text) {
        console.log("Input is empty");
      } else {
            navigate(`/search?q=${text}`);
      }
    };

    return (
        <div className="header">
            
            <nav><NavLink 
                    to='/'
                    style={({isActive}) => {
                        return {
                            color: isActive ? '#6ebaed' : 'white',
                            fontSize: '1.4rem',
                            textDecoration:'none',
                            fontWeight: '700',
                        }
                    }}><img src={logoCodePulse} 
                    alt='logo'
                    style={{width:'300px', height:'26px'}} /></NavLink>
                    </nav>
            <Navigation />
            <SearchBar handleSubmit={handleSubmit}
                       value={text}
                       handleChange={(e) => setText(e.target.value)}/>
                       <LogIn />
        </div>
    )
}