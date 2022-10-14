// Write your JS code here
import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import Header from '../Header'

import IconsRoute from '../IconsRoute'

import DocterInfo from '../DocterInfo'

import './index.css'

class Home extends Component {
  state = {val: ''}

  setVal = event => {
    this.setState({val: event.target.value})
  }

  render() {
    const {val} = this.state
    return (
      <div>
        <Header />
        <div className="home-con">
          <div className="search-con">
            <input
              type="search"
              value={val}
              className="inp"
              onChange={this.setVal}
              placeholder="search for doctors, labs etc...."
            />
            <BsSearch />
          </div>
          <div className="services-container">
            <h1 className="title">Services</h1>
            <ul className="list-con">
              <li>
                <div className="list-item">
                  <img
                    src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665670762/online__consultancy_kyxzvr.jpg"
                    className="service-img"
                    alt="phone"
                  />
                  <p className="name">Consultations</p>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <img
                    src="https://res.cloudinary.com/drwe3lgdh/image/upload/v1665671118/medicine_v7vi0m.jpg"
                    className="service-img"
                    alt="medicine"
                  />
                  <p className="name">Medicines</p>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <img
                    src="https://res.cloudinary.com/drwe3lgdh/image/upload/v1665671169/lab_ayenqe.jpg"
                    className="service-img"
                    alt="lab"
                  />
                  <p className="name">Laboratories</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <DocterInfo />
        <IconsRoute />
      </div>
    )
  }
}

export default Home
