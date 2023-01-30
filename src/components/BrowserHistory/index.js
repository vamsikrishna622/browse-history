import {Component} from 'react'
import './index.css'
import BrowserHistoryItem from '../BrowserHistoryItem'

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  filterHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updatedHistoryList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return updatedHistoryList
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const filteredHistoryList = historyList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({historyList: filteredHistoryList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const filteredHistoryList = this.filterHistoryList()
    return (
      <div className="app-container">
        <div className="browser-history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-img"
            alt="app logo"
          />
          <div className="search-history-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-img"
              alt="search"
            />
            <input
              type="search"
              className="search-ele"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>
        {filteredHistoryList.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="history-container">
            {historyList.map(eachHistory => (
              <BrowserHistoryItem
                key={eachHistory.id}
                historyDetails={eachHistory}
                onDeleteHistory={this.onDeleteHistory}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BrowserHistory
