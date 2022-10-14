import {Link} from 'react-router-dom'

import IconsRoute from '../IconsRoute'

import './index.css'

const Person = () => (
  <div className="p-con">
    <div className="person-container">
      <img
        className="person-img"
        src="https://res.cloudinary.com/drwe3lgdh/image/upload/v1665751578/person-1_eauqtu.webp"
        alt="person"
      />
      <h1 className="person-name">Pavan Kalyan</h1>
      <p className="age">Age:23</p>
      <p className="email">pavan*******@gmail.com</p>
      <Link to="/">
        <button className="sub-button" type="button">
          Logout
        </button>
      </Link>
    </div>
    <IconsRoute />
  </div>
)

export default Person
