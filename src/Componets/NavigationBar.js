// import { hover } from "@testing-library/user-event/dist/hover";
import { NavLink } from "react-router-dom";


function Navigation (){

    return (
        <>
       
        <nav className="nav-bar">
            {/* <NavLink 
                    to='/'
                    style={({isActive}) => {
                        return {
                            color: isActive ? '#6ebaed' : 'white',
                            fontSize: '1.4rem',
                            textDecoration:'none',
                            fontWeight: '700',
                        }
                    }}>Code Pulse</NavLink> */}
            <NavLink 
                    to='/new'
                    style={({isActive}) => {
                        return {
                            color: isActive ? 'orange' : 'white',
                            textDecoration:'none',
                            // marginTop:'5px',
                           
                        }
                    }}>New</NavLink>
            <NavLink 
                    to='/past'
                    style={({isActive}) => {
                        return {
                            color: isActive ? 'orange' : 'white',
                            textDecoration:'none',
                            // marginTop:'5px',
                        }
                    }}>Past</NavLink>
            <NavLink 
                    to='/comments'
                    style={({isActive}) => {
                        return {
                            color: isActive ? 'orange' : 'white',
                            textDecoration:'none',
                            // marginTop:'5px'
                        }
                    }}>Comments</NavLink>
            <NavLink 
                    to='/ask'
                    style={({isActive}) => {
                        return {
                            color: isActive ? 'orange' : 'white',
                            textDecoration:'none',
                            // marginTop:'5px'
                        }
                    }}>Ask</NavLink>
            <NavLink 
                    to='/show'
                    style={({isActive}) => {
                        return {
                            color: isActive ? 'orange' : 'white',
                            textDecoration:'none',
                            // marginTop:'5px'
                        }
                    }}>Show</NavLink>
            <NavLink 
                    to='/jobs'
                    style={({isActive}) => {
                        return {
                            color: isActive ? 'orange' : 'white',
                            textDecoration:'none',
                            // marginTop:'5px'
                        }
                    }}>Jobs</NavLink>
            {/* <NavLink 
                    to='/submit'
                    style={({isActive}) => {
                        return {
                            color: isActive ? 'orange' : 'white',
                            textDecoration:'none',
                            marginTop:'5px'
                        }
                    }}>Submit</NavLink> */}
        </nav>
        
        </>
    )

}

export default Navigation