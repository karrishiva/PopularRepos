// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {id, name, avatarUrl, starsCount, forksCount, issuesCount} = repoDetails

  return (
    <li key={id} className="main-container">
      <img src={avatarUrl} alt={name} className="logo" />
      <p className="logo-name">{name}</p>
      <div className="main-list-container">
        <div className="content-element">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="image-size"
          />
          <p>{starsCount} stars</p>
        </div>
        <div className="content-element">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="image-size"
          />
          <p>{forksCount} forks</p>
        </div>
        <div className="content-element">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="image-size"
          />
          <p>{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
