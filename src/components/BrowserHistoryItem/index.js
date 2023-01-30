import './index.css'

const BrowserHistoryItem = props => {
  const {eachItem, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachItem

  const onDeleteItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <h1 className="time">{timeAccessed}</h1>
      <div className="used-item-container">
        <div className="img-container">
          <img src={logoUrl} alt="domain logo" className="image" />
          <div className="title-container">
            <p className="heading">{title}</p>
            <p className="paragraph">{domainUrl}</p>
          </div>
        </div>
        <button type="button" onClick={onDeleteItem} className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
