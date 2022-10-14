import {Link} from 'react-router-dom'

import {AiFillHome, AiOutlineExperiment} from 'react-icons/ai'

import {MdDateRange} from 'react-icons/md'

import {TbMessageCircle2} from 'react-icons/tb'

import {BsPersonPlus} from 'react-icons/bs'

import './index.css'

const IconsRoute = () => (
  <div className="icons-container">
    <Link className="link-el" to="/">
      <button type="button" className="button">
        <AiFillHome />
      </button>
    </Link>
    <Link className="link-el" to="/date">
      <button type="button" className="button">
        <MdDateRange />
      </button>
    </Link>
    <Link className="link-el" to="/message">
      <button type="button" className="button">
        <TbMessageCircle2 />
      </button>
    </Link>
    <Link className="link-el" to="/experiment">
      <button type="button" className="button">
        <AiOutlineExperiment />
      </button>
    </Link>
    <Link className="link-el" to="/person">
      <button type="button" className="button">
        <BsPersonPlus />
      </button>
    </Link>
  </div>
)

export default IconsRoute
