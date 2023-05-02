import { useLocation } from "react-router-dom";
import FetchItems from "../Componets/FetchItems";

export default function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  return (
    <div className="main-home"
             style={{backgroundColor:'rgb(243, 240, 240)', height:'100%', margin:'0'}}>
      <h3>Search Results for "{query}"</h3>
      <FetchItems
                url={`https://hn.algolia.com/api/v1/search?query=${query}`}
                href='url'
                title="title"
                points="points"
                author="author"
                time="created_at"
                num_comments="num_comments"
/>

    </div>
  );
}
