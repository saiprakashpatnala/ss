// Write your JS code here
import {MdOutlineNotificationsActive} from 'react-icons/md'

import './index.css'

const Header = () => (
  <nav className="nav-el">
    <div className="name-con">
      <h1 className="heading">Hey,Pavan</h1>
      <img
        src="https://res.cloudinary.com/drwe3lgdh/image/upload/v1665669812/download_pjrl1b.jpg"
        alt="smiley"
        className="smile"
      />
    </div>
    <MdOutlineNotificationsActive className="bell" />
  </nav>
)

export default Header
