import { NavLink } from "react-router-dom";

export default function  LogIn () {


    return (
        <div class="LogInButton">
        <nav><NavLink 
                to='/login'
                style={({isActive}) => {
                    return {
                        color: isActive ? 'orange' : 'white',
                        textDecoration:'none',
                        marginTop:'5px'
                    }
                }}><button class="btn-log-in">Log In</button></NavLink></nav>
    </div>
        // <div className="LogInButton">
        //     <button className="btn-log-in">Log In</button>
        // </div>
    )
}