
import FetchItems from '../Componets/FetchItems'

    export default function HomePage (){
    return(
      <div className="main-home">
          <FetchItems 
                      url="https://hn.algolia.com/api/v1/search_by_date?query=csst&hitsPerPage=30"
                      href='url'
                      title="title"
                      title2="story_title"
                      points="points"
                      author="author"
                      time="created_at"
                      num_comments="num_comments"
          />
    </div>
    )
}