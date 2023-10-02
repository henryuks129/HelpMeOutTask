import NewFooter from '../layouts/NewFooter'
import editicon from '../assets/edit.svg'
import webcard from '../assets/WEB CARD5.svg'
import '../styles/Details.css'

export default function Details() {
  return (
    <div className='container'>
        <NewFooter/>
        <div>
          <p><span>Home</span> / <span>Recent Videos</span> / <span>How To Create A Facebook Ad Listing</span></p>
          <div className='d-flex gap-3'>
            <h1>How To Create A Facebook Ad Listing</h1>
            <img src={editicon} alt="" />
          </div>
          <div>
            <img src={webcard} alt="" className='img-fluid'/>
          </div>
          <div>
            <div>
            <input type="text" />
            <button>send</button>
            </div>
          </div>
        </div>
    </div>
  )
}
