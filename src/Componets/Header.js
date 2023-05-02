import Navigation from "./NavigationBar"
import SearchBar from "./SearchBar"
import logo from '../image/logo_200x200.png'
import { useState} from "react"
import { useNavigate } from 'react-router-dom';


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
        <div className="header" 
             style={{display:'flex', backgroundColor:"orange", justifyContent:'flex-start', alignItems:'center', margin:'0'}}>
            <img src={logo} 
                 alt='logo'
                 style={{width:'100px', height:'100px', transform:'scale(0.8)'}} />
            
            <Navigation />
            <SearchBar handleSubmit={handleSubmit}
                       value={text}
                       handleChange={(e) => setText(e.target.value)}/>
        </div>
    )
}