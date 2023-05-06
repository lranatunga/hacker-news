
import { useState, useEffect } from "react";
import TimeAgo from 'react-timeago'

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
        alert('Something went wrong!')
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
        {/* <span className="spinner"></span>
        <h4
          style={{
            height: "100vh",
            position: "absolute",
            top: "60%",
            left: "48%",
          }}
        >
          Loading...
        </h4> */}
        <div class="lds-default"><div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
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
    <div style={{padding:'10px'}}>
      {data.map((item, index) => (
        <div key={item.objectID}>
            <div
              className="item"
              
              style={{ display: "flex", flexDirection: "row", gap: "8px", marginTop:'8px' }}
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
                  // fontSize:'16px'
                }}
              >
                {item[props.title]}
                {item[props.title2]}
              </a>
            </div>
               <div className='bottom-section'
                    style={{display:'flex', flexDirection:'row', gap:'10px', marginLeft:'50px', color:'grey', fontSize:'14px'}}>
                  <p style={{margin:'0'}}>{item[props.points]} points</p>
                  <p className="author"
                     style={{margin:'0'}}>
                     by {item[props.author]}
                  </p>
                  <TimeAgo date={item[props.time]}/>
                  <p style={{margin:'0'}}>{item[props.num_comments]} comments</p>
                                                 
            </div>
        </div>
      ))}
          <div className="pagination" style={{ padding: "10px" }}>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              style={{ marginRight: "10px" }}
            >
            {'<'}
            </button>
            <span>
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              style={{ marginLeft: "10px" }}
            >
             {'>'}
            </button>
          </div>
    </div>
  );
}
