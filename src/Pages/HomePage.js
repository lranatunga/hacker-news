
import FetchItems from '../Componets/FetchItems'

    export default function HomePage (){
    return(
      <div className="main-home">
          <FetchItems 
                      url="https://hn.algolia.com/api/v1/search?query=css&hitsPerPage=30"
                      href='url'
                      title="title"
                      points="points"
                      author="author"
                      time="created_at"
                      num_comments="num_comments"
          />
    </div>
    )
}