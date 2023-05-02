

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
    return <div className="spinner" ></div>
  }

  return (
    <div>
      {data.map((item, index) => (
        <>
        <div className='top-section' 
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
