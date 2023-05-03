
// import { useState, useEffect } from "react"


// export default function FetchItems(props) {
//   const [data, setData] = useState(null)


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(props.url)
//         const json = await response.json()
//         setData(json.hits)
//       } catch (error) {
//         console.error(error)
//       }
//     }
//     fetchData()
//   }, [props.url])

//   if (!data) {
//     return <div className="loading"
//                 style={{height:'100vh'}}>
//               <span className="spinner"></span>
//               <h4 style={{height:'100vh', 
//                   position:' absolute',
//                   top: '60%',
//                   left: '48%',}}
//                   >Loading...</h4></div>
//   }

//   if (data.length === 0){
//     return (
//       <div style={{height:'100vh'}}>
//       <p style={{fontSize:'1.5rem', fontWeight:'bold',
//               position:' absolute',
//               top: '50%',
//               left:'40%'}}>No Results Found!</p>
//     </div>
//     )
//   }



//   return (
//     <div>
//       {data.map((item, index) => (
//         <>
//         <div className='top-section'
//              key={index} 
//              style={{display:'flex', flexDirection:'row', color:'gray', gap:'5px', paddingTop:'10px'}}>
//                 <p className='order'
//                     style={{margin:'0'}}>{index +1}.</p>
//                     <a
//                         href={item[props.href]}
//                         target="_blank"
//                         rel="noopenner noreferrer"
//                         className='topic'
//                         style={{textDecoration:'none',margin:'0' ,color:'black', fontWeight:'600'}}
//                                     >
//                                       {item[props.title]}
//                                     </a>
//                                   </div>
//                                   <div className='bottom-section'
//                                        style={{display:'flex', flexDirection:'row', gap:'10px', marginLeft:'50px'}}>
//                                     <p style={{margin:'0'}}>{item[props.points]} points</p>
//                                     <p className="author"
//                                        style={{margin:'0'}}>
//                                       by {item[props.author]}
//                                     </p>
//                                     <p style={{margin:'0'}}>{item[props.time]}</p>
//                                     <p style={{margin:'0'}}>{item[props.num_comments]} comments</p>
                                  
//                                   </div>
//                                   </>
//       ))}



//     </div>
//   )
// }




import { useState, useEffect } from "react";

export default function FetchItems(props) {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(props.url + "&page=" + currentPage);
        const json = await response.json();
        setData(json.hits);
        setTotalPages(json.nbPages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [props.url, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (!data) {
    return (
      <div
        className="loading"
        style={{ height: "100vh", position: "relative" }}
      >
        <span className="spinner"></span>
        <h4
          style={{
            height: "100vh",
            position: "absolute",
            top: "60%",
            left: "48%",
          }}
        >
          Loading...
        </h4>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div style={{ height: "100vh" }}>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            position: "absolute",
            top: "50%",
            left: "40%",
          }}
        >
          No Results Found!
        </p>
      </div>
    );
  }

  return (
    <div>
      {data.map((item, index) => (
        <>
            <div
              className="item"
              key={index}
              style={{ display: "flex", flexDirection: "row", gap: "5px" }}
            >
              <p className="order" style={{ margin: "0" }}>
                {currentPage  * 30 + index + 1}.
              </p>
              <a
                href={item[props.href]}
                target="_blank"
                rel="noopenner noreferrer"
                className="topic"
                style={{
                  textDecoration: "none",
                  margin: "0",
                  color: "black",
                  fontWeight: "600",
                }}
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
          <div className="pagination" style={{ marginTop: "20px" }}>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              style={{ marginRight: "10px" }}
            >
              Prev
            </button>
            <span>
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              style={{ marginLeft: "10px" }}
            >
              Next
            </button>
          </div>
    </div>
  );
}
