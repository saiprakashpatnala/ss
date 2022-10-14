import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import IconsRoute from '../IconsRoute'

import TabItem from '../TabItem'

import './index.css'

class Date extends Component {
  state = {problem: '', dt: '', arr: []}

  changeDt = event => {
    this.setState({dt: event.target.value})
  }

  setProblem = event => {
    this.setState({problem: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {problem, dt} = this.state
    const newAppointment = {
      id: uuidv4(),
      problem,
      dt,
    }

    this.setState(prevState => ({
      arr: [...prevState.arr, newAppointment],
      problem: '',
      dt: '',
    }))
  }

  render() {
    const {problem, dt, arr} = this.state
    return (
      <div className="d-con">
        <div className="date-container">
          <form onSubmit={this.submitForm}>
            <div className="inp-con">
              <label htmlFor="dt" className="lab">
                Fix your Appointment
              </label>
              <input
                type="date"
                className="dt-inp"
                id="dt"
                value={dt}
                placeholder="Fix your appointment"
                onChange={this.changeDt}
              />
            </div>
            <div className="inp-con">
              <label htmlFor="problem" className="lab">
                Details
              </label>
              <input
                type="text"
                className="dt-inp"
                id="problem"
                value={problem}
                placeholder="details regarding your problem"
                onChange={this.setProblem}
              />
            </div>
            <button type="submit" className="sub-button">
              Submit
            </button>
          </form>
          <ul className="ul">
            {arr.map(each => (
              <TabItem key={each.id} details={each} />
            ))}
          </ul>
        </div>
        <IconsRoute />
      </div>
    )
  }
}

export default Date
