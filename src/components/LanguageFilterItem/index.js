// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {filteredLanguage, activeLanguage, isActive} = props

  const {id, language} = filteredLanguage

  const getActiveLanguage = () => {
    activeLanguage(id)
  }

  const activeBtn = isActive ? 'active-btn' : 'btn-element'

  return (
    <li key={id} className="list-element" onClick={getActiveLanguage}>
      <button className={`${activeBtn}`} type="button">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
