
import FetchItems from '../Componets/FetchItems'

    export default function HomePage (){
    return(
      <div className="main-home"
               style={{backgroundColor:'rgb(243, 240, 240)', height:'100%', margin:'0'}}>
          <FetchItems 
                      url="https://hn.algolia.com/api/v1/search?query=html&hitsPerPage=50"
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