
import FetchItems from '../Componets/FetchItems'

    export default function AskPage (){
    return(
      <div className="main-home"
               style={{backgroundColor:'rgb(243, 240, 240)', height:'100%', margin:'0'}}>
          <FetchItems 
                      url="https://hn.algolia.com/api/v1/search_by_date?query=tags=ask_hn&hitsPerPage=30"
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