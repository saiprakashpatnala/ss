import './index.css'

const TabItem = props => {
  const {details} = props
  const {dt, problem} = details
  return (
    <li className="tab-list">
      <p className="dt">{dt}</p>
      <p className="problem">{problem}</p>
    </li>
  )
}

export default TabItem
