import {Link} from 'react-router-dom'

export default function Footer () {

    return(
        <>
             {/* <hr className='seperator'
                        style={{backgroundColor:'orange', height:'3px', border:'none', margin:'0'}}/> */}
            <footer className='footer'
                    >
                 
                <div className='container-footer'
                     style={{padding:'0',margin:'0'}}>
                     
                    <Link to='https://www.ycombinator.com/apply/' target='_blank'
                     style={{display:'flex', justifyContent:'center', textDecoration:'none', padding:'10px', color:'white', fontWeight:'300', fontSize:'16px', margin:'0'}}
                     >Application are open for YC Summer 2023</Link>
                    <div className='links-footer' style={{display:'flex', justifyContent:'center',  margin:'0'}}>
                        <Link to='https://news.ycombinator.com/newsguidelines.html' target='_blank'
                              style={{display:'flex',gap:'15px', justifyContent:'center',  textDecoration:'none', color:'white', fontWeight:'500', fontSize:'18px', margin:'0'}}
                        >Guidelines</Link>
                        <Link to='https://news.ycombinator.com/newsfaq.html' target='_blank'
                              style={{display:'flex',gap:'15px', justifyContent:'center',  textDecoration:'none', color:'white', fontWeight:'500', fontSize:'18px', margin:'0'}}
                        >FAQ</Link>
                        <Link to='https://news.ycombinator.com/lists' target='_blank'
                              style={{display:'flex',gap:'15px', justifyContent:'center',  textDecoration:'none', color:'white', fontWeight:'500', fontSize:'18px', margin:'0'}}
                        >Lists</Link>
                        <Link to='https://github.com/HackerNews/API' target='_blank'
                              style={{display:'flex',gap:'15px', justifyContent:'center',  textDecoration:'none', color:'white', fontWeight:'500', fontSize:'18px', margin:'0'}}
                        >API</Link>
                        <Link to='https://news.ycombinator.com/security.html' target='_blank'
                              style={{display:'flex',gap:'15px', justifyContent:'center',  textDecoration:'none', color:'white', fontWeight:'500', fontSize:'18px', margin:'0'}}
                        >Security</Link>
                        <Link to='https://www.ycombinator.com/legal/' target='_blank'
                              style={{display:'flex',gap:'15px', justifyContent:'center',  textDecoration:'none', color:'white', fontWeight:'500', fontSize:'18px', margin:'0'}}
                        >Legal</Link>
                        <Link to='https://www.ycombinator.com/apply/' target='_blank'
                              style={{display:'flex',gap:'15px', justifyContent:'center',  textDecoration:'none', color:'white', fontWeight:'500', fontSize:'18px', margin:'0'}}
                        >Apply to YC</Link>
                        <Link to='mailto:hn@ycombinator.com' target='_blank'
                              style={{display:'flex',gap:'15px', justifyContent:'center',  textDecoration:'none', color:'white', fontWeight:'500', fontSize:'18px', margin:'0'}}
                        >Contact</Link>
                    </div>

                </div>


            </footer>
        </>
    )
}