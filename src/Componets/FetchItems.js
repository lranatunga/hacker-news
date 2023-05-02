

import { useState, useEffect } from "react"

export default function FetchItems(props) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(props.url)
        const json = await response.json()
        setData(json.hits)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [props.url])

  if (!data) {
    return <div className="loading"
                style={{height:'100vh'}}>
              <span className="spinner"></span>
              <h4 style={{height:'100vh', 
                  position:' absolute',
                  top: '60%',
                  left: '48%',}}
                  >Loading...</h4></div>
  }

  if (data.length === 0){
    return (
      <div style={{height:'100vh'}}>
      <p style={{fontSize:'1.5rem', fontWeight:'bold',
      position:' absolute',
              top: '50%',
              left:'40%'}}>No Results Found!</p>
    </div>
    )
  }


  return (
    <div>
      {data.map((item, index) => (
        <>
        <div className='top-section'
             key={index} 
             style={{display:'flex', flexDirection:'row', color:'gray', gap:'5px'}}>
                <p className='order'
                    style={{margin:'0'}}>{index +1}.</p>
                    <a
                        href={item[props.href]}
                        target="_blank"
                        rel="noopenner noreferrer"
                        className='topic'
                        style={{textDecoration:'none',margin:'0' ,color:'black'}}
                                    >
                                      {item[props.title]}
                                    </a>
                                  </div>
                                  <div className='bottom-section'
                                       style={{display:'flex', flexDirection:'row', gap:'10px', marginLeft:'50px'}}>
                                    <p style={{margin:'0'}}>{item[props.points]} points</p>
                                    <p className="author"
                                       style={{margin:'0'}}>
                                      by {item[props.author]}
                                    </p>
                                    <p style={{margin:'0'}}>{item[props.time]}</p>
                                    <p style={{margin:'0'}}>{item[props.num_comments]} comments</p>
                                  
                                  </div>
                                  </>
      ))}
    </div>
  )
}
