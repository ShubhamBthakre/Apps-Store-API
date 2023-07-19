// Write your code here
import './index.css'

const TabItem = props => {
  const {TabDetails, updateActiveTabId, activeTab} = props
  const {tabId, displayText} = TabDetails

  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  const tabClassName = activeTab ? 'active' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${tabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
