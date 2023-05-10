import { useEffect, useState } from "react"

export default function Users (props) {

    const [user, setUser] = useState({
        username: "",
        karma: "",
        created_at: ""
    })
   
    useEffect (()=>{
        const fetchUser = async () =>{
            try{ const response = await fetch(`http://hn.algolia.com/api/v1/users?id=${props.userId}`)
            const json = await response.json();
            const userData = json.hits[0];
            setUser({
                username: userData.username,
                karma: userData.karma,
                created_at: userData.created_at
            });
            } catch (error){
                alert('Something went wrong')
            }
        }
        
        fetchUser()
    },[props.userId])
    return(
        <div>
        <p>User: {user.username}</p>
        <p>Karma: {user.karma}</p>
        <p>Created: {user.created_at}</p>
      </div>
    )
}